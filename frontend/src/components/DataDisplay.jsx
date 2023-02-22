import { useEffect, useState } from "react";
// import getData from "../../getdata"
import axios from "axios";
import Popup from "./Popup";
import { Skeleton } from "@mui/material";

const DataDisplay = ({ urlEnding }) => {
  //mi az a usecallback? mi ez? :https://devtrium.com/posts/async-functions-useeffect

  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  

  const [clickedImage, setClickedImage] = useState({});

  console.log(isLoading);

  useEffect(() => {
    const getData = async () => {
      
      let res = await axios.get(`http://localhost:8080/${urlEnding}`);
      console.log(res.request.status);
      // if (res.request.status === 200) {
      //   setIsloading(false);
      // }
      setData(res.data);
    };

    getData();
  }, []);

  const handleClick = (image) => {
    console.log("clicked");
    console.log(image);
    setClickedImage(image);
    setOpen(!open);
  };

{/* <Skeleton variant="rectangular" key={i}>  </Skeleton> */}

  return (
    <div className="dataDisplayContainer">
      {data.map((image, i) =>

          <div
            key={i}
            className="imageContainer"
            onClick={(e) => handleClick(image)}
          >
            <img
              className="images"
              src={`http://localhost:8080/${image.filename}`}
              alt=""
            />
          </div>
        
      )}

      {open && <Popup {...{ clickedImage, setOpen, open }} />}
    </div>
  );
};

export default DataDisplay;
