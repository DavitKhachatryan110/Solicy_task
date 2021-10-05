import React from "react";
import { useForm } from "react-hook-form";
import { useDataDispach } from "../ContextProvider";

import "./styles.css";

const HookForm = ({ modalName, dataCard, index, type }) => {
  const dispatch = useDataDispach();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addToData = (item) => {
    dispatch({ type: "ADD", item });
  };

  const onSubmit = (data) => {
    if (type) {
      dispatch({ type: type, index, data });
    } else {
      data.team = [];
      addToData(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Name</label>
      <input
        {...register("name")}
        placeholder="Name"
        defaultValue={modalName === "Edit" ? dataCard?.name : null}
      />
      <label>Country</label>
      <input
        {...register("country", { required: true })}
        defaultValue={modalName === "Edit" ? dataCard?.country : null}
        placeholder="Country"
      />
      {errors?.country && <p>Country name is required.</p>}
      <label>liga</label>
      <input
        {...register("liga", { required: true })}
        placeholder="Liga"
        defaultValue={modalName === "Edit" ? dataCard?.liga : null}
      />
      {errors.liga && <p>Liga name is required.</p>}
      <label>Age</label>
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
