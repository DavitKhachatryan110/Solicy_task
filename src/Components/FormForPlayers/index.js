import React from "react";
import { useForm } from "react-hook-form";
import { useDataDispach } from "../ContextProvider";
import { CHANGE_INFO } from "../../Constants";
import uniqid from "uniqid";
import { useParams } from "react-router";

import "./styles.css";

const PlayersForm = ({ modalName, dataCard, type, toggle }) => {
  const { teamID } = useParams();
  const dispatch = useDataDispach();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPlayer = (item) => {
    dispatch({ type: type, item, teamID });
  };

  const onSubmit = (data) => {
    if (type == CHANGE_INFO) {
      data.id = dataCard.id;
      dispatch({ type: type, teamID, data });
    } else {
      data.id = uniqid.process();
      addPlayer(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="small_section">
        <label>Full Name </label>
        <input
          {...register("name")}
          placeholder="Full Name"
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.name
              : null
          }
        />
      </div>
      <div className="small_section">
        <label>National Federation </label>
        <input
          {...register("Federation", { required: true })}
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.Federation
              : null
          }
          placeholder="National Federation"
        />
        {errors?.country && <p>Country name is required.</p>}
      </div>
      <div className="small_section">
        <label>liga </label>
        <input
          {...register("Liga", { required: true })}
          placeholder="Liga"
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.Liga
              : null
          }
        />
        {errors.liga && <p>Liga name is required.</p>}
      </div>
      <div className="small_section">
        <label>Age </label>
        <input
          {...register("Age", { pattern: /\d+/ })}
          min="1"
          max="43"
          placeholder="Year"
          type="number"
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.Age
              : null
          }
        />
        {errors.age && <p>Please enter number for age.</p>}
      </div>
      <div className="small_section">
        <label>Number </label>
        <input
          {...register("Number", { pattern: /\d+/ })}
          min="1"
          max="99"
          placeholder="Number"
          type="number"
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.Number
              : null
          }
        />
        {errors.age && <p>Please enter number for number of player.</p>}
      </div>
      <div className="small_section">
        <label>Height </label>
        <input
          {...register("Height", { pattern: /\d+/ })}
          min="160"
          max="200"
          placeholder="Height"
          type="number"
          defaultValue={
            modalName === "Edit Player Info" ||
            modalName === "Edit Player Information"
              ? dataCard?.Height
              : null
          }
        />
        {errors.age && <p>Please enter number for height.</p>}
      </div>

      <label htmlFor="Foot">
        {" "}
        Left {"  "}
        <input {...register("Foot")} type="radio" value="Left" name="Foot" />
      </label>
      <label htmlFor="Foot">
        Rigth {"   "}
        <input {...register("Foot")} type="radio" value="Rigth" name="Foot" />
      </label>
      <label htmlFor="Foot">
        Both are equal {"   "}
        <input
          {...register("Foot")}
          type="radio"
          value="Both are equal"
          name="Foot"
        />
      </label>
      <input type="submit" onClick={toggle} />
    </form>
  );
};

export default PlayersForm;
