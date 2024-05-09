import * as Yup from "yup";
export const validationSchema1 = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^([789]\d{9})$/, "Invalid phone number")
    .required("Phone is required"),
});

export const validationSchema2 = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  id_card: Yup.mixed().required("Id card Photo is required"),
});
