const {
	getAllApiPokemons,
	getPokemonApiById,
} = require('./apiFunctions')
const {
	getAllDbPokemons,
	getPokemonDbById,
	getPokemonDbByName,
} = require('./dbFunctions')
const {Pokemon,Type} = require('../db.js')
  
const getAllPokemons = async (name) => {
	try{
		if(name){
		const dbPoke = await getPokemonDbByName(name.toLowerCase());
		return dbPoke.length>0?dbPoke:await getAllApiPokemons(name.toLowerCase());
	} 
		const [apiPokes,dbPokes] = await Promise.all([getAllApiPokemons(),getAllDbPokemons()])
		const allPokemons = [...dbPokes, ...apiPokes]
		return allPokemons
	}catch(error){
		console.log('Pokemon not found (error in getAllPokemons)')
		return[]
	}
}
 
const createPokemon = async (name,id,img,hp,attack,defense,speed,height,weight,types) => {
	try{
		if (name) {
			let poke = await Pokemon.create({
				name: name.toLowerCase(),
				id,
				hp,
				img,
				attack,
				defense,
				speed,
				height,
				weight,
			});
			await poke.addType(types);
		}else {
			return 'error';
		}
	}catch(err){
		console.log(err)
		console.log('Error in createPokemon')
	}
	
};
//createPokemon('Adolf','https://estaticos.muyhistoria.es/media/cache/760x570_thumb/uploads/images/gallery/5cbef2eb5cafe8a351149221/adolf-hitler.jpg',1000,1000,1000,10000,1000,1000,[9,15])
//only 898 pokemons 
const getPokemonById = (id) => {
	try{
		if(id.length>5){
			return getPokemonDbById(id)
		}
		return getPokemonApiById(id)
	}catch(err){
		console.log('Error in getPokemonById')
	}
}

//extra functions 
const deletePokemon = async(id)=>{
	try{
		return await Pokemon.destroy({where:{id:id}})
	}catch(err){
		console.log('Error in deletePokemon or Pokemon does not exist')
	}
} 
  
const updatePokemonData = async(id,name,hp,attack,defense,speed,height,weight,img)=>{
	try{
		console.log(id)
		 let poke = await Pokemon.findOne({
		 	where : {
		 		id : id
		 	}, 
		 })
		 poke.update({
		 	id,
		 	name,
        	hp,
        	attack,
        	defense,
        	speed,
        	height,
        	weight,
        	img,
		 })
 
	}catch(err){
		console.log(err)
		console.log('Error in updatePokemonData')
	}
}
//updatePokemonData('40d207cc-16fd-46d4-b256-b9a987fcdeef','Aggus',10,10,10,10,10,10,'url',[5,7])
module.exports = {
	getAllPokemons,
	createPokemon,
	getPokemonById,
	deletePokemon,
	updatePokemonData,
}