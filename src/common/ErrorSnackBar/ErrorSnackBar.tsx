import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetErrorMessage } from "../../store/reducer/data-reducer/data-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
	const error = useAppSelector((state) => state.data.errorMessage);

	const dispatch = useAppDispatch();

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		dispatch(resetErrorMessage({}));
	};

	return (
		<Snackbar open={!!error}>
			<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
				{error}
			</Alert>
		</Snackbar>
	);
}
