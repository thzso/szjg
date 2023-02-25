import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Popup from "./Popup";
import { Skeleton } from "@mui/material";

const DataDisplay = ({ urlEnding }) => {
  //mi az a usecallback? mi ez? :https://devtrium.com/posts/async-functions-useeffect

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState({});
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`http://localhost:8080/${urlEnding}`);
      setData(res.data);
    };

    getData();
  }, []);

  const handleClick = (image) => {
    setClickedImage(image);
    setOpen(!open);
  };

  const handleOnload = (filename) => {
    setLoadedImages((prev) => [...prev, filename]);
  };

  useEffect(() => {
    if (data.length === loadedImages.length && data.length !== 0) {
      setIsLoading(false);
    }
  }, [loadedImages]);

  return (
    <div className="dataDisplayContainer">
      {data.map((image, i) => (
        <div
          key={i}
          className="imageContainer"
          onClick={(e) => handleClick(image)}
        >
      
          {isLoading && (
            <Skeleton variant="rectangular">
              <img
                className="images"
                src={`http://localhost:8080/${image.filename}`}
                alt=""
              />
            </Skeleton>
          )}

          <img
            style={{ display: isLoading ? "none" : "block" }}
            onLoad={() => handleOnload(image.filename)}
            className="images"
            src={`http://localhost:8080/${image.filename}`}
            alt=""
          />
          
        </div>
      
      ))}

      {open && <Popup {...{ clickedImage, setOpen, open }} />}
    </div>
  );
};

export default DataDisplay;
