import Spheal from "./resources/Spheal.gif";
import Mew from "./resources/Mew.gif";
import Magikarp from "./resources/Magikarp.gif";
import Dratini from "./resources/Dratini.gif";
import Pikachu from "./resources/Pikachu.gif";
import Bulbasaur from "./resources/Bulbasaur.gif";
import Charmander from "./resources/Charmander.gif";
import Psyduck from "./resources/Psyduck.gif";
import Aerodactyl from "./resources/Aerodactyl.gif";
import Mantine from "./resources/Mantine.gif";
import Squirtle from "./resources/Squirtle.gif";
import Eevee from "./resources/Eevee.gif";
import Jigglypuff from "./resources/Jigglypuff.gif";
import Totodile from "./resources/Totodile.gif";
import Meowth from "./resources/Meowth.gif";
import Spinda from "./resources/Spinda.gif";
import Swablu from "./resources/Swablu.gif";

export const useHelper = () => {
  const options = [
    Spheal,
    Mew,
    Magikarp,
    Dratini,
    Pikachu,
    Bulbasaur,
    Charmander,
    Psyduck,
    Aerodactyl,
    Mantine,
    Squirtle,
    Eevee,
    Jigglypuff,
    Totodile,
    Meowth,
    Spinda,
    Swablu,
  ];
  const options2 = {
    0: "",
    1: "While ‘Splash’ suggests an association with water, the move in Japanese can actually mean both splash and hop, but usually the latter. This explains why the move can be learned by non-Water-type Pokémon such as Spoink and Hoppip. It also explains why Splash is disabled when the Psychic-type move Gravity is in effect...",
    2: "Pikachu are known for their love of ketchup. They also enjoy eating apples and berries...",
    3: "Clefairy was the original choice for Pokémon mascot but Pikachu became more popular and took on the role...",
    4: "A Pikachu weighs 13 pounds and stands at 1 foot, 4 inches in height. Pikachu is a yellow character...",
    5: "When a Pikachu is exposed to a Thunderstone it evolves into Raichu.",
    6: "Ash Has Owned Bulbasaur For Longer Than Any Other Pokémon Except Pikachu...",
    7: "Bulbasaur’s Name Means ‘Strange Seed’ In Most Languages.",
    8: "Ash catches many Pokémon during his travels but Charmander is one of his most commonly used Pokémon...",
    9: "In the anime when Ash’s Charmander evolves into Charmeleon its nature changes completely. Before it evolved it was fiercely loyal to Ash for saving it from its previous thuggish trainer. After evolving into Charmeleon it becomes stubborn and lazy, only fighting battles when it felt like it...",
    10: "Squirtles Are The Most Common Starter For Main Characters In The Anime...",
    11: "Mega Blastoise Is The Most Powerful Non-Legendary Water Pokémon.",
    12: "Squirtle’s Evolution Is The Least Used Starting Pokémon In Competitive Battles...",
    13: "Mew's Stats Are Perfectly Balanced...",
    14: "There Is A Theory That Ditto Are Failed Mew Clones...",
    15: "Ash Ketchum, one of the most popular and recognizable Pokémon characters, is known as Satoshi in Japan, sharing his name with the creator of Pokémon...",
    16: "Ash's birthday is May 22, 1986. This date is taken from the fact he was 10 years, 10 months, and 10 days old when he met Pikachu...",
  };
  const image =
    options[
      (function () {
        return Math.floor(Math.random() * (17 - 0 + 0) + 0);
      })()
    ];
  const description =
    options2[
      (function () {
        return Math.floor(Math.random() * (16 - 1 + 1) + 1);
      })()
    ];

  return {
    image,
    description,
  };
};
