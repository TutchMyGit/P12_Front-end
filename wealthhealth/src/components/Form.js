import { states } from "../data/states";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import "../styles/form.css";
import { saveEmployee, setEmployee, setModalBoolean } from "../app/slices";
import { useState } from "react";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.table(data);
    await dispatch(setEmployee(data));
    await dispatch(saveEmployee(data));
    await dispatch(setModalBoolean(true))
  };

  const departments = [
    {
      name: "Sales",
    },
    {
      name: "Marketing",
    },
    {
      name: "Engineering",
    },
    {
      name: "Human Resources",
    },
    {
      name: "Legal",
    },
  ];

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="employee_personnal">
        <legend>Employee</legend>
        <input
          placeholder="First name"
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p className="alert" role="alert">
            First name is required
          </p>
        )}
        <input
          placeholder="Last name"
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName?.type === "required" && (
          <p className="alert" role="alert">
            Last name is required
          </p>
        )}
        <input
          placeholder="Date of birth"
          {...register("dateOfBirth", { required: true })}
          aria-invalid={errors.dateOfBirth ? "true" : "false"}
        />
        {errors.dateOfBirth?.type === "required" && (
          <p className="alert" role="alert">
            Date of birth is required
          </p>
        )}
        <input
          placeholder="Start date"
          {...register("startDate", { required: true })}
          aria-invalid={errors.startDate ? "true" : "false"}
        />
        {errors.startDate?.type === "required" && (
          <p className="alert" role="alert">
            Start date is required
          </p>
        )}
      </fieldset>

      <fieldset className="address">
        <legend>Address</legend>
        <input
          placeholder="Street"
          {...register("street", { required: true })}
          aria-invalid={errors.street ? "true" : "false"}
        />
        {errors.street?.type === "required" && (
          <p className="alert" role="alert">
            Street's name is required
          </p>
        )}
        <input
          placeholder="City"
          {...register("city", { required: true })}
          aria-invalid={errors.city ? "true" : "false"}
        />
        {errors.city?.type === "required" && (
          <p className="alert" role="alert">
            City's name is required
          </p>
        )}
        <select
          {...register("state", { required: true })}
          name="state"
          id="state"
        >
          {states.map((state) => (
            <option value={state.abbreviation} key={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
        <input
          placeholder="Zipcode"
          {...register("zipcode", { required: true })}
          aria-invalid={errors.zipcode ? "true" : "false"}
        />
        {errors.zipcode?.type === "required" && (
          <p className="alert" role="alert">
            Zipcode is required
          </p>
        )}
      </fieldset>
      <fieldset className="department">
        <legend>Department</legend>
        <select
          {...register("department", { required: true })}
          name="department"
          id="department"
        >
          {departments.map((department) => (
            <option value={department.name} key={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </fieldset>
      <input className="submit" type="submit" value="save" />
    </form>
  );
}

export default Form;
