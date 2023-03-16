import React, { useEffect, useState } from "react";
import "./App.css";
import { dataAPI, ResponseDataType } from "./services/getData";
import { Pagination } from "./common/Pagination/Pagination";

export function App() {
  const [data, setData] = useState<Array<ResponseDataType>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPageEl, setCountPerPageEl] = useState(15);
  //const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const lastIndexEl = currentPage * countPerPageEl;
  const firstIndexEl = lastIndexEl - countPerPageEl;

  const slicedData = data?.slice(firstIndexEl, lastIndexEl);

  useEffect(() => {
    dataAPI
      .getData("pk_fe0615293ada4cf689196891d4155333")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      {slicedData?.map((el) => {
        return (
          <ul key={el.symbol}>
            <li>{el.symbol}</li>
          </ul>
        );
      })}
      <Pagination
        totalCountEl={data ? data.length : 1}
        countPerPageEl={countPerPageEl}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
