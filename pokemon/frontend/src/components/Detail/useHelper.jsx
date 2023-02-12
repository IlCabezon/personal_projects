import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getPokeById,
  deletePokemon,
  addToFavourite,
} from "../../redux/actions/index.js";

let favs = {};
export const useHelper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [design, setDesign] = useState("imgT");
  const [show, setShow] = useState(false);
  const { attack, defense, height, hp, img, name, speed, types, weight } =
    useSelector((state) => state.pokemonById);
  const favourites = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatch(getPokeById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, favourites, design, favourites, dispatch]);

  const handleStyle = (e) => {
    setDesign(e.target.value);
  };

  const handleDelete = (e) => {
    dispatch(deletePokemon(id));
    navigate("/home");
  };

  const addToFav = (e) => {
    if (!favs[e.target.value]) {
      favs[e.target.value] = {
        id,
        name,
        attack,
        defense,
        height,
        hp,
        img,
        name,
        speed,
        types,
        weight,
      };
      dispatch(addToFavourite(favs));
    } else {
      delete favs[e.target.value];
      dispatch(addToFavourite(favs));
    }
  };

  const type = (type) => {
    switch (type) {
      case "normal":
        return "normal";
      case "grass":
        return "grass";
      case "poison":
        return "poison";
      case "bug":
        return "bug";
      case "ground":
        return "ground";
      case "steel":
        return "steel";
      case "electric":
        return "electric";
      case "fairy":
        return "fairy";
      case "flying":
        return "flying";
      case "psychic":
        return "psychic";
      case "ice":
        return "ice";
      case "dark":
        return "dark";
      case "fighting":
        return "fighting";
      case "rock":
        return "rock";
      case "ghost":
        return "ghost";
      case "dragon":
        return "dragon";
      case "water":
        return "water";
      case "unknown":
        return "unknown";
      case "shadow":
        return "shadow";
      case "fire":
        return "fire";
      default:
        return "default";
    }
  };

  const transform = (value) => {
    let i = 1;

    if (value < 10) return value * 10;

    while (value > 100 * i) {
      i++;
    }
    return value / (i * 2);
  };

  const switchShow = () => {
    setShow(!show);
  };

  return {
    id,
    design,
    show,
    attack,
    defense,
    height,
    hp,
    img,
    name,
    speed,
    types,
    weight,
    favourites,
    switchShow,
    transform,
    type,
    handleStyle,
    handleDelete,
    addToFav,
  };
};
