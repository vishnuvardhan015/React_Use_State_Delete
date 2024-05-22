import { useState, useEffect } from "react";
import Data from "./Data";

const Main = () => {
  const [data, setData] = useState(Data);

  const handelButton1 = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      {data.map((eachObj, index) => {
        const { FirstName, Lastname, Email, Age } = eachObj;
        return (
          <div key={index}>
            <h2>{FirstName}</h2>
            <h2>{Lastname}</h2>
            <h2>{Email}</h2>
            <h2>{Age}</h2>
            <button onClick={() => handelButton1(index)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
