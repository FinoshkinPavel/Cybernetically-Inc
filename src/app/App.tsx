import React, { useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { DataTable } from "../common/Table/Table";
import { Pagination_ } from "../common/Pagination/Pagination_";
import { Form } from "../common/Form/Form";
import s from "./App.module.scss";

export function App() {
  const data = useAppSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPageEl, setCountPerPageEl] = useState(4);

  const lastIndexEl = currentPage * countPerPageEl;
  const firstIndexEl = lastIndexEl - countPerPageEl;

  const slicedData = data?.slice(firstIndexEl, lastIndexEl);

  return (
    <div className={s.app}>
      <Form />
      <DataTable data={slicedData} />
      <Pagination_
        totalCountEl={data ? data.length : 1}
        countPerPageEl={countPerPageEl}
        setCountPerPageEl={setCountPerPageEl}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
