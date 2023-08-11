import * as yup from "yup";

const apiKey = yup.string().required("Required");

export const validationSchema = yup.object({ apiKey });
