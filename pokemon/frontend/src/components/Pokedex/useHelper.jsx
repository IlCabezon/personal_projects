import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pagination,
  getAllPokemons,
  getAllTypes,
  getExtraImages,
} from "../../redux/actions/index.js";

export const useHelper = () => {
  const dispatch = useDispatch();
  const [design, setDesign] = useState("imgT");
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsCopy = useSelector((state) =>
    Array.isArray(state.pokemonsCopy[0])
      ? state.pokemonsCopy[0]
      : state.pokemonsCopy
  );
  const types = useSelector((state) => state.types);
  const totalPages = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
    dispatch(getExtraImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const changePages = (currentPage) => {
    setCurrentPage(currentPage);
    dispatch(pagination(currentPage));
  };

  const handleStyle = (e) => {
    setDesign(e.target.value);
  };

  const clearCheck = () => {
    var list = document.getElementsByTagName("input");
    if (list.length > 0) {
      for (let input of list) {
        input.checked = false;
      }
    }
  };

  return {
    design,
    pokemonsCopy,
    types,
    totalPages,
    currentPage,
    clearCheck,
    setDesign,
    changePages,
    handleStyle,
  };
};
