// import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// const schema = yup.object().shape({
//   cardName: yup.string().min(16).required("full name"),
//   cardNamber: yup.string().min(16).matches("only numbers"),
//   expMonth: yup.number().max(12).min(1).typeError("only number"),
//   expYear: yup.number().max(2032).min(2022),
// });

// function Payment() {
function Payment() {
  const schema = yup.object().shape({
    cardName: yup.string().min(16).required("full name"),
    cardNamber: yup.string().min(16).matches("only numbers"),
    expMonth: yup.number().max(12).min(1).typeError("only number"),
    expYear: yup.number().max(2032).min(2022),
  });

  const {
    register,
    handlesubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      <label for="cardName">cardName</label>
      <input type="text" placeholder="full name" {...register("card name")} />
      <label for="cardNamer">cardNamber</label>
      <input
        type="text"
        placeholder="full number"
        {...register("card namber")}
      />
      <label for="expYear">ExpYear</label>
      <input type="text" placeholder="2022" {...register("expyear")} />
      <label for="cvv">cvv</label>
      <input
        type="text"
        placeholder="last three numbers at the back"
        {...register("cvv")}
      />
      <button type="submit">PAY NOW</button>
    </div>
  );
}

export default Payment;
