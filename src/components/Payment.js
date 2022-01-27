import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

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
    <div className="pay">
      <h2>PAY HERE</h2>
      <img
        src="https://th.bing.com/th/id/R.5d499c361b501b9071ac4ba45459dc27?rik=13HHBWscFaF5eg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-kTpRcnkbK34%2fUgzv4JtMEsI%2fAAAAAAAAAJY%2f3YnrgYzuLv4%2fs1600%2fvisa%2bmc%2blogo.jpg&ehk=sXg28jrPnHBwsSO99fEJKAluc30fP15Le5I0wg1ErYc%3d&risl=&pid=ImgRaw&r=0"
        className="credit-card"
        alt="credit"
      />

      <p></p>
      <div className="design">
        <label for="cardName">cardName: </label>
        <input type="text" placeholder="full name" {...register("card name")} />

        <label for="cardNamer">cardNamber: </label>
        <input
          type="text"
          placeholder="full number"
          {...register("card namber")}
        />
        <p></p>
        <label for="expYear">ExpYear: </label>
        <input type="text" placeholder="mm/yy" {...register("expyear")} />

        <label for="cvv">cvv: </label>
        <input type="text" placeholder="123" {...register("cvv")} />
      </div>
      <div className="pay-now">
        <button type="submit">PAY NOW</button>
      </div>
    </div>
  );
}

export default Payment;
