const axios = require('axios')
 
const getAllApiPokemons = (name)=>{	
	try{
		const arr = Array(name?1:48).fill().map((_,i)=>axios.get(`https://pokeapi.co/api/v2/pokemon/${name?name:i+1}`).then(r=>r.data))		
		    
			return Promise.all(arr).then(res=>{
				return res.map((e)=>
					({ 
						id:e.id,
						name:e.name,
						hp:e.stats[0].base_stat,
						attack:e.stats[1].base_stat,
						defense:e.stats[2].base_stat,
						speed:e.stats[5].base_stat,
						height:e.height,
						weight:e.weight,
						types:e.types.map((e,i)=>{return{name:e.type.name,id:i}}),
						//img:e.sprites.other.home.front_default,
						img:{imgT:e.sprites.other.home.front_default,imgA:e.sprites.other['official-artwork'].front_default,imgC:e.sprites.other.dream_world.front_default}
					})
				)
			})
		
	}catch(err){
		console.log('error in getAllAPiPokemons')
		return []
	}
}
 
const getPokemonApiById = (id)=>{
	return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(r=>r.data)
		.then(poke => {
			if(!poke){
				return 'not found'
			}
			return {
				id:poke.id,
				name:poke.name,
				//img:poke.sprites.other.home.front_default,
				img:{imgT:poke.sprites.other.home.front_default,imgA:poke.sprites.other['official-artwork'].front_default,imgC:poke.sprites.other.dream_world.front_default},
				types:poke.types.map(e=>e.type.name),
				hp:poke.stats[0].base_stat,
				attack:poke.stats[1].base_stat,
				defense:poke.stats[2].base_stat,
				speed:poke.stats[5].base_stat,
				height:poke.height,
				weight:poke.weight,
			}
		}
	)
}

module.exports = {
	getAllApiPokemons,
	getPokemonApiById,
}
 
