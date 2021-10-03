import React from "react";
import { useForm } from "react-hook-form";
import { useDataDispach } from "../ContextProvider";

import "./styles.css";

const HookForm = ({ modalName, dataCard, index }) => {
  const dispatch = useDataDispach();
  console.log(modalName, "ooooooooooooooooooooooooooooo");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addToData = (item) => {
    dispatch({ type: "ADD", item });
  };

  const onSubmit = (data) => {
    if (dataCard) {
      console.log(data, "wwwwwwwwwwwwwwwww");
      dispatch({ type: "CHANGE", index, data });
    } else {
      addToData(data);
      console.log(data);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        {...register("name")}
        placeholder="Name"
        defaultValue={modalName === "Edit" ? dataCard?.name : null}
      />
      <input
        {...register("country", { required: true })}
        defaultValue={modalName === "Edit" ? dataCard?.country : null}
        placeholder="Country"
      />
      {errors?.country && <p>Country name is required.</p>}
      <input
        {...register("liga", { required: true })}
        placeholder="Liga"
        defaultValue={modalName === "Edit" ? dataCard?.liga : null}
      />
      {errors.liga && <p>Liga name is required.</p>}
      <input
        {...register("age", { pattern: /\d+/ })}
        min="1"
        placeholder="Year"
        type="number"
        defaultValue={modalName === "Edit" ? dataCard?.age : null}
      />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
};

export default HookForm;
