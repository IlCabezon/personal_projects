import { useState } from "react";

export const useHelper = () => {
  const [tab, setTab] = useState("pokedex");

  const handleTab = (e) => {
    if (e.target.innerText.toLowerCase())
      return setTab(e.target.innerText.toLowerCase());
    if (e.target.attributes.value.nodeValue)
      return setTab(e.target.attributes.value.nodeValue);
    if (e.target.textContent) return setTab(e.target.textContent);
  };

  return {
    tab,
    setTab,
    handleTab,
  };
};
