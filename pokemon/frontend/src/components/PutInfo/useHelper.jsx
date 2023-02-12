import { useState } from "react";
import { changeData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useHelper = (initialForm, id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({
    attack: false,
    defense: false,
    hp: false,
    name: false,
    speed: false,
    height: false,
    weight: false,
  });

  const handleChange = (e, customValue) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: customValue ? customValue : value,
    });
    validation(name, value);
  };

  const validation = (name, value) => {
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/;

    if (name === "name") {
      if (!regexName.test(value.trim()) || value.trim().length > 15) {
        setErrors({ ...errors, [name]: true });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    } else {
      console.log(!regexNumber.test(value.trim()));
      if (
        !regexNumber.test(Number(value.trim())) ||
        value < 0 ||
        value > 10000
      ) {
        setErrors({ ...errors, [name]: true });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    }
  };

  const control = [];

  for (let e in errors) {
    if (errors[e] === true) {
      control.push("true");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeData(data, id));
    navigate("/home");
  };

  return {
    data,
    errors,
    control,
    handleSubmit,
    handleChange,
    validation,
    setData,
  };
};
