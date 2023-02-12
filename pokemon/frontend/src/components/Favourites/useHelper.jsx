import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFavs, deleteFromFavourites } from "../../redux/actions";

export const useHelper = () => {
  const dispatch = useDispatch();
  const original = useSelector((state) => state.favourites);
  const favourites = useSelector((state) => state.favouritesCopy);
  const filterActive = useSelector((state) => state.filterActive);
  const types = useSelector((state) => state.types);
  const [show, setShow] = useState(false);
  /* useEffect(() => {
    dispatch(resetFavs());
  }, [handleDelete]); */

  const resetFilter = () => {
    dispatch(resetFavs());
  };

  const handleDelete = (e) => {
    if (e.target.attributes.value.value) {
      dispatch(deleteFromFavourites(e.target.attributes.value.value));
    }
    if (e.target.attributes.value.nodeValue) {
      dispatch(deleteFromFavourites(e.target.attributes.value.nodeValue));
    }
  };

  const switchDelete = () => {
    setShow(!show);
  };

  return {
    original,
    favourites,
    filterActive,
    types,
    show,
    switchDelete,
    resetFilter,
    handleDelete,
  };
};
