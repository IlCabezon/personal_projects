import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName, clearFilter } from "../../redux/actions/index.js";

export const useHelper = (clearCheck) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ name: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleClick = (e) => {
    input.name = "";
    clearCheck();
    dispatch(clearFilter());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.length > 0) {
      dispatch(getPokeByName(input.name.trim()));
      return;
    }
    return alert("pokemon not found");
  };

  return {
    input,
    handleChange,
    handleClick,
    handleSubmit,
  };
};
