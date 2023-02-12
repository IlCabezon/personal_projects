import { 
	GET_ALL_POKEMON, 
	GET_ALL_TYPES,
	GET_POKE_BY_NAME, 
	GET_POKE_BY_ID,
	PAGINATION,
	SORT_POKE, 
	FILTER_FUNCTION,
	CLEAR_FILTER,
	/* API_DB_FUNCTION, */
	POKEMON_CREATED,
	//extra
	GET_EXTRA_IMAGES,
	CHOOSE_IMAGE,
	ADD_TO_FAVOURITE,
	DELETE_FROM_FAVOURITES,
	FILTER_FAVS,
	RESET_FAVS,
	CHANGE_DATA
} from '../actions/index.js'

import {
	filterF,sort,deleteFav,filterFav //apibd
} from './helperFunctions'

const initialState = {
    pokemons : [],
    pokemonsCopy : [],
    pokemonById : [],
    total : [],
    types:[],
    aux : [], 
	//extra states
	images:[],
	choosenImg:'',
	favourites:[],
	favouritesCopy:[],
	filterActive:false
};
 
const cases = {}

cases[GET_ALL_POKEMON] = (state,payload) => ({
	...state,
	pokemons:payload,
	pokemonsCopy:payload,
	total:payload.map((_,i)=>i+1),
})

cases[GET_ALL_TYPES] = (state,payload) => ({
	 ...state,
	 types:payload
})

cases[GET_POKE_BY_NAME] = (state,payload) => ({
	...state,
	pokemonsCopy: (payload.length)?payload:[1],
	total:payload.length>0?[1]:[0]
})
 
cases[GET_POKE_BY_ID] = (state,payload) => ({
	...state,
	pokemonById:payload,
})

cases[PAGINATION] = (state,payload) => ({
	...state,
	pokemonsCopy : state.aux.length>0?state.aux[payload-1]:state.pokemons[payload-1],
})

cases[CLEAR_FILTER] = (state) => ({
	...state,
	pokemonsCopy:state.pokemons,
	total:state.pokemons.map((_,i)=>i+1),
	aux:[],
})
  
cases[FILTER_FUNCTION] = (state,payload) => ({
	...state,
	pokemonsCopy : filterF(state.pokemons,payload)[0],
	aux : filterF(state.pokemons,payload)[0],
	total : filterF(state.pokemons,payload)[1]
})

/* cases[API_DB_FUNCTION] = (state,payload) => ({
	...state,
	pokemonsCopy : apibd(state.pokemons,payload)[0],
	aux : apibd(state.pokemons,payload)[0],
	total : apibd(state.pokemons,payload)[1]
}) */

cases[SORT_POKE] = (state,payload) => ({
	...state,
	pokemonsCopy : sort(state.aux.length?state.aux:state.pokemonsCopy,payload)[0],
	aux : sort(state.aux.length?state.aux:state.pokemonsCopy,payload)[0],
	total : sort(state.aux.length?state.aux:state.pokemonsCopy,payload)[1],
})

cases[POKEMON_CREATED] = (state,payload) => ({
	...state,
	/* pokemons : [...state.pokemons,payload],
    pokemonsCopy : [...state.pokemonsCopy,payload] */
	pokemons : payload,
    pokemonsCopy : payload
})

//extra cases
cases[GET_EXTRA_IMAGES] = (state,payload) => ({
	...state,
	images:payload
})

cases[CHOOSE_IMAGE] = (state,payload) => ({
	...state,
	choosenImg:payload,
})

cases[ADD_TO_FAVOURITE] = (state,payload) => ({
	...state,
	favourites: payload,
	favouritesCopy: state.favourites,
})

cases[DELETE_FROM_FAVOURITES] = (state,payload) => ({
	...state,
	favourites : deleteFav(state.favourites,payload)[1],
	favouritesCopy : deleteFav(state.favourites,payload)[0]
})

cases[FILTER_FAVS] = (state,payload) => ({
	...state,
	filterActive:true,
	favouritesCopy : filterFav(state.favourites,payload)
})

cases[RESET_FAVS] = (state) => ({
	...state,
	filterActive:false,
	favouritesCopy:state.favourites
})

cases[CHANGE_DATA] = (state,payload) => ({
	...state,
	pokemons:payload,
	pokemonsCopy:payload
})

export default function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}

