import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPokemon } from "../../redux/actions/index.js";

export const useValidation = (initialForm, validateForm, setTab) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [page, setPage] = useState(1);
  const [control, setControl] = useState(false);
  const [currentImg, setCurrentImg] = useState();
  useEffect(() => {
    setErrors(validateForm(data));
  }, [data]);

  const handleChange = (e, customValue) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: customValue ? customValue : value,
    });
    if (customValue) setCurrentImg(customValue);
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setData({
        ...data,
        types: [...data.types, parseInt(e.target.value)],
      });
    }
    if (!e.target.checked) {
      setData({
        ...data,
        types: data.types.filter((type) => type !== parseInt(e.target.value)),
      });
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(data));
  };

  const changePage = (e) => {
    if (Object.keys(errors).length <= 1 && data.types.length) {
      setPage(page + 1);
      setControl(!control);
    }
    setControl(!control);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm(data);
    setErrors(error);
    if (Object.keys(error).length === 0) {
      alert("Pokemon created");
      dispatch(createPokemon(data));
      setTab("pokedex");
    } else {
      //return alert("Canot send the form");
    }
  };

  return {
    data,
    types,
    errors,
    page,
    control,
    currentImg,
    setCurrentImg,
    changePage,
    setPage,
    handleChange,
    handleBlur,
    handleCheck,
    handleSubmit,
  };
};
