import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDataDispach } from "../ContextProvider";
import { CHANGE_INFO } from "../../Constants";

import "./styles.css";

const PlayersForm = ({ modalName, dataCard, index, type, indexOfPlayer }) => {
  const dispatch = useDataDispach();
  console.log(type, "HOOKFORM", index);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [isChecked, setIsChecked] = useState(false);
 const onlyOne = (event) =>{
    console.log("==",event.target.value)
    let checkboxes = document.getElementsByName('check')
    console.log("cheek",checkboxes);
    checkboxes.forEach((item) => {
      if (item !== event.target.name) {item.checked = false}
    })

}
  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  const addPlayer = (item) => {
    dispatch({ type: type, item, index });
  };

  const onSubmit = (data) => {
    if (type == CHANGE_INFO) {
      dispatch({ type: type, index, data, indexOfPlayer });
    } else {
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
        defaultValue={modalName === "Edit Player Info" ? dataCard?.name : null}
      /></div>
      <div className="small_section">
      <label>National Federation </label>
      <input
        {...register("Federation", { required: true })}
        defaultValue={
          modalName === "Edit Player Info" ? dataCard?.Federation : null
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
        defaultValue={modalName === "Edit Player Info" ? dataCard?.liga : null}
      />
      {errors.liga && <p>Liga name is required.</p>}
      </div>
      <div className="small_section">
      <label>Age </label>
      <input
        {...register("Age", { pattern: /\d+/ })}
        min="1"
        placeholder="Year"
        type="number"
        defaultValue={modalName === "Edit Player Info" ? dataCard?.age : null}
      />
      {errors.age && <p>Please enter number for age.</p>}
      </div>
      <div className="small_section">
      <label>Number </label>
      <input
        {...register("Number", { pattern: /\d+/ })}
        min="1"
        placeholder="Number"
        type="number"
        defaultValue={modalName === "Edit Player Info" ? dataCard?.age : null}
      />
      {errors.age && <p>Please enter number for number of player.</p>}
      </div>
      <div className="small_section">
      <label>Height </label>
      <input
        {...register("Height", { pattern: /\d+/ })}
        min="160"
        placeholder="Height"
        type="number"
        defaultValue={modalName === "Edit Player Info" ? dataCard?.age : null}
      />
      {errors.age && <p>Please enter number for height.</p>}
      </div>

      <label htmlFor="Foot">
        {" "}
        Left {"  "}
        <input {...register('Foot')} type="radio" value="Left"  name="Foot"/>
      </label>
      <label htmlFor="Foot">
        Rigth {"   "}
        <input {...register('Foot')} type="radio" value="Rigth"  name="Foot"/>
      </label>
      <label htmlFor="Foot">
      Both are equal {"   "}
        <input {...register('Foot')} type="radio" value="Both are equal"  name="Foot"/>
      </label>
      <input type="submit" />
    </form>
  );//both are equal
};

export default PlayersForm;
