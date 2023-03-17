import React from "react";
import { DataTable } from "../common/Table/Table";
import { Form } from "../common/Form/Form";
import s from "./App.module.scss";

export function App() {
  return (
    <div className={s.app}>
      <Form />
      <DataTable />
    </div>
  );
}
