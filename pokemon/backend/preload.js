const axios = require('axios')
const { Type,Image } = require('./src/db.js');
 
const preLoad = async()=>{
	try {
    	const apiUrl = await axios.get('https://pokeapi.co/api/v2/type')
    	const api = (apiUrl.data.results).map(e=>Type.findOrCreate({where:{name:e.name}}));
    	const img = Array(200).fill().map((_,i)=>axios.get(`https://pokeapi.co/api/v2/pokemon/${i+49}`).then(r=>r.data))
		
    	Promise.all(img).then(r=>{
    		return r.map(e=>{
    			Image.findOrCreate({where:{imgT:e.sprites.other.home.front_default,imgA:e.sprites.other['official-artwork'].front_default,imgC:e.sprites.other.dream_world.front_default}})
    		})
    	})
  	}catch(err){
    	console.log('Error in preLoad')
  	}
}
 
module.exports = preLoad;