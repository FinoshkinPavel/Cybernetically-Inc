import React from "react";
import { useFormik } from "formik";
import { Button, Card, TextField } from "@mui/material";
import { validationSchema } from "../../utils/validate-utils";
import s from "./Form.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchData } from "../../store/reducer/data-reducer/data-async-thunk";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const Form = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			apiKey: "",
		},
		validationSchema,
		onSubmit: async (values) => {
			//alert(JSON.stringify(values, null, 2));
			const resultAction = await dispatch(fetchData(values.apiKey));
			if (fetchData.fulfilled.match(resultAction))
				navigate(`/data/${values.apiKey}`);
		},
	});

	return (
		<Card className={s.blockForm}>
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
			<div className={s.textWrap}>
				<p className={s.text}>
					If you have not API-KEY, you can get on this address{" "}
					<a href="https://iexcloud.io" target={"_blank"} className={s.link}>
						iexcloud.io
					</a>{" "}
					and take a new API-KEY
				</p>
			</div>
		</Card>
	);
};
