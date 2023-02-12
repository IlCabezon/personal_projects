import axios from 'axios'

export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_POKE_BY_NAME = 'GET_POKE_BY_NAME'
export const GET_POKE_BY_ID = 'GET_POKE_BY_ID'
export const PAGINATION = 'PAGINATION'
export const CLEAR_FILTER = 'CLEAR_FILTER'
export const SORT_POKE = 'SORT_POKE'
export const FILTER_FUNCTION = 'FILTER_BY_TYPE'
/* export const API_DB_FUNCTION = 'API_DB_FUNCTION' */
export const POKEMON_CREATED = 'POKEMON_CREATED'
//extra
export const GET_EXTRA_IMAGES = 'GET_EXTRA_IMAGES'
export const CHOOSE_IMAGE = 'CHOOSE_IMAGE'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES'
export const FILTER_FAVS = 'FILTER_FAVS'
export const RESET_FAVS = 'RESET_FAVS'
export const CHANGE_DATA = 'CHANGE_DATA'

export const getAllPokemons = () => dispatch => {
	return axios.get('http://localhost:3001/pokemons')
		.then(r=>{
			dispatch({
				type:GET_ALL_POKEMON,
				payload:r.data
			})
		}
	)
} 
  
export const getAllTypes = () => dispatch => {
	return axios.get('http://localhost:3001/types')
		.then(r=>{
			dispatch({
				type:GET_ALL_TYPES,
				payload:r.data
			})
		}
	)
}

//extra action
export const getExtraImages = () => dispatch => {
	return axios.get('http://localhost:3001/images')
		.then(r=>{
			dispatch({
				type:GET_EXTRA_IMAGES,
				payload:r.data
			})
		}
	)
}
//

export const getPokeByName = (input) => dispatch =>{
	return fetch (`http://localhost:3001/pokemons?name=${input}`)
		.then(r=>r.json())
		.then(r=>{
			dispatch({
				type:GET_POKE_BY_NAME,
				payload:r,
			}	
		)
	})
}	
  
export const getPokeById = (payload) => dispatch => {
	return new Promise((res,rej)=>{
		dispatch({type:GET_POKE_BY_ID,payload:{}})
		axios.get('http://localhost:3001/pokemons/' + payload)
		.then(r=>{
			dispatch({
				type:GET_POKE_BY_ID,
				payload:r.data
			})
		}
	).then(res).catch(rej)
	}
 )
} 

export function createPokemon (payload) {
	return async function (dispatch) {
		await axios.post(
			'http://localhost:3001/pokemons',
			payload
		)
		dispatch({type:POKEMON_CREATED,payload:{}})
	};
}
  

export const pagination = (payload) => ({
	type:PAGINATION,
	payload,
}) 

export const clearFilter = () => ({
	type:CLEAR_FILTER,
})

export const filterFunction= (payload) => (dispatch) => dispatch({
	type:FILTER_FUNCTION,
	payload,
})
 
/* export const apidbFunction = (payload) => (dispatch) => dispatch({
	type:API_DB_FUNCTION,
	payload,
}) */

export const sortPoke = (payload) => dispatch => dispatch({
	type: SORT_POKE,
	payload,
})

//extra actions


export function deletePokemon (payload) {
	return async function (dispatch) {
		await axios.delete (`http://localhost:3001/pokemons/${payload}`) 
	}
} 

export function changeData (payload,id) {
	return async function (dispatch) {
		await axios.put (`http://localhost:3001/pokemons/${id}`,payload) 
		dispatch({type:CHANGE_DATA,payload:{}})
	};
} 

export const addToFavourite = (payload) => dispatch => dispatch({
	type:ADD_TO_FAVOURITE,
	payload,
})
 
export const deleteFromFavourites = (payload) => dispatch => dispatch({
	type:DELETE_FROM_FAVOURITES,
	payload,
})

export const filterFavs= (payload) => (dispatch) => dispatch({
	type:FILTER_FAVS,
	payload,
})

export const resetFavs = ()=>({
	type:RESET_FAVS
})