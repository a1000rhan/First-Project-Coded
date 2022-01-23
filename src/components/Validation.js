import * as yup from "yup"; //* means everything
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(8)
    .required(/[a-zA-Z]/, "only character"),
  password: yup.string().max(12).min(8).matches("").required(),
  email: yup
    .string()
    .min(20)
    .required(/^\S+@\S+.\S+$/, "type a valid email"),
});

export default schema;
