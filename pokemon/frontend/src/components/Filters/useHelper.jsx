import { useDispatch } from "react-redux";
import {
  filterFavs,
  /* apidbFunction, */
  filterFunction,
  sortPoke,
} from "../../redux/actions/index.js";

/* var typesFilter = []; */
export const useHelper = (location) => {
  const dispatch = useDispatch();

  const dispatchFilter = (e) => {
    if (e.target.value) {
      location === "favs"
        ? dispatch(filterFavs(e.target.value))
        : dispatch(filterFunction(e.target.value));
    } else {
      location === "favs"
        ? dispatch(filterFavs(e.target.attributes.value.nodeValue))
        : dispatch(filterFunction(e.target.attributes.value.nodeValue));
    }
    /* if (e.type === "change") {
      if (e.target.checked) {
        typesFilter.push(e.target.value);
      } else if (!e.target.checked) {
        typesFilter = [...typesFilter.filter((g) => g !== e.target.value)];
      }
      dispatch(filterFunction(typesFilter));
    } else {
      dispatch(apidbFunction(e.target.attributes.value.nodeValue));
    } */
  };

  const dispatchSort = (e) => {
    dispatch(sortPoke(e.target.attributes.value.nodeValue));
  };

  return {
    dispatchFilter,
    dispatchSort,
  };
};
