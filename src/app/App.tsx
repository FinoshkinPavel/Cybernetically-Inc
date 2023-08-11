import { DataTable } from "../common/Table/Table";
import { Form } from "../common/Form/Form";
import s from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { ErrorSnackbar } from "../common/ErrorSnackBar/ErrorSnackBar";

export function App() {
	return (
		<div className={s.app}>
			<ErrorSnackbar />
			<Routes>
				<Route path="/Cybernetically-Inc" element={<Form />} />
				<Route path="/data/:apiKey" element={<DataTable />} />
			</Routes>
		</div>
	);
}
