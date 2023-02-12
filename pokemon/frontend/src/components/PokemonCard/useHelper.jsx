import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

export const useHelper = () => {
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
  return {
    type,
  };
};
