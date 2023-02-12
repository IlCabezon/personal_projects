const axios = require('axios')
const {Pokemon,Type,Image} = require('../db.js')
   
const getAllDbPokemons = async ()=>{
	try{
		let pokemon = await Pokemon.findAll({
			attribute : ['id','name','img','attack','defense'],
			include : {
				model : Type,
			}
		}).then(r=>r)
		
		return pokemon;
	}catch(err){
		console.log('error in getAllDbPokemons')
		return []
	}
}

const getAllDbTypes = ()=>{
	try{
		let types = Type.findAll({
			attribute : ['id','name'],
			
		}).then(r=>r)
	
		return types;
	}catch(err){
		console.log(err)
	}
}
 
const getPokemonDbById = (pokeId) =>{
    return Pokemon.findOne({	       
        where: {
            id: pokeId.toString()
        },
        include : {
        	model : Type
        } 
    }).then(poke => {
        if (!poke) {
            return [];
        }
        return {
        	pokeId,
        	name:poke.dataValues.name,
        	hp:poke.dataValues.hp,
        	attack:poke.dataValues.attack,
        	defense:poke.dataValues.defense,
        	speed:poke.dataValues.speed,
        	height:poke.dataValues.height,
        	weight:poke.dataValues.weight,
        	img:poke.dataValues.img,
       		types:poke.dataValues.types.map(e=>e.dataValues.name)};
    });
}
//getPokemonDbById('ac5e65a8-efaa-4dbe-8083-fd8c4f433b3c')
 
const getPokemonDbByName = (name) =>{
    try{
    	return Pokemon.findOne({	       
        	where: {
            	name: name
        	},
        	include : {
        		model : Type
        	} 
    	}).then(poke => {
        	if (!poke) {
            	return [];
        	}
        	return [{
        		id:poke.dataValues.id,
        		name,
        		hp:poke.dataValues.hp,
        		attack:poke.dataValues.attack,
        		defense:poke.dataValues.defense,
        		speed:poke.dataValues.speed,
        		height:poke.dataValues.height,
        		weight:poke.dataValues.weight,
        		img:poke.dataValues.img,
       			types:poke.dataValues.types.map(e=>{return{name:e.dataValues.name}})}];
    	});	
    }catch(err){
    	console.log('Error in getPokemonDbByName')
    	return []
    }
}
   
//extra db functions

const defaultImages = async()=>{
	try{
		let img = await Image.findAll({
			attribute : ['imgT','imgA','imgC'],
		})
		//console.log(img.map(e=>{return{img:e.dataValues.img}}))
		return img.map(e=>{return{imgT:e.dataValues.imgT,imgA:e.dataValues.imgA,imgC:e.dataValues.imgC}});
	}catch(err){
		console.log('error in defaultImages')
		return []
	}
}
 
module.exports = {
	getAllDbPokemons,
	getAllDbTypes,
	getPokemonDbById,
	getPokemonDbByName,
	defaultImages
}