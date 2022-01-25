import * as yup from "yup"; //bb
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(8)
    .required(/[a-zA-Z]/, "only character"),
  password: yup
    .string()
    .max(20)
    .min(8)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Minimum eight characters, at least one letter, one number and one special character"
    )
    .required("This field is required"),
  email: yup
    .string()
    .min(20)
    .required(/^\S+@\S+.\S+$/, "type a valid email"),
});

export default schema;
