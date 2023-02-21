import { useEffect, useState } from "react";
// import getData from "../../getdata"
import axios from "axios";

const DataDisplay = ({urlEnding}) => {
  //mi az a usecallback? mi ez? :https://devtrium.com/posts/async-functions-useeffect

  console.log(urlEnding)
  
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`http://localhost:8080/${urlEnding}`);
      setData(res.data);
    };


    getData();
  }, []);

  console.log(data)

  return (
    <div className="dataDisplayContainer">
      {data.map((image, i) => (

        <div key={i} className="imageContainer" >
       
          <img className="images" src={`http://localhost:8080/${image.filename}`} alt="" />

        </div>
      ))}
      
    </div>
  );
};

export default DataDisplay;