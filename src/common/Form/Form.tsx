import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { validationSchema } from "../../utils/validate-utils";
import s from "./Form.module.scss";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      apiKey: "pk_fe0615293ada4cf689196891d4155333",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={s.blockForm}>
      <div>
        <p className={s.text}>Please enter your API-Key</p>
      </div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <TextField
          className={s.textField}
          error={formik.touched.apiKey && !!formik.errors.apiKey}
          name="apiKey"
          label={
            formik.touched.apiKey && formik.errors.apiKey
              ? formik.errors.apiKey
              : "API-KEY"
          }
          type="text"
          variant="outlined"
          value={formik.values.apiKey}
          onChange={formik.handleChange}
        />

        <Button
          variant="outlined"
          type={"submit"}
          size={"small"}
          color="inherit"
        >
          get data
        </Button>
      </form>
      <div>
        <p className={s.text}>
          If you have not API-KEY, you can get on this address{" "}
          <a href="https://iexcloud.io" target={"_blank"} className={s.link}>
            iexcloud.io
          </a>{" "}
          and take a new API-KEY
        </p>
      </div>
    </div>
  );
};
