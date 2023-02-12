const { Router } = require('express');
const router = Router();
const {
	getAllPokemons,
	createPokemon,
	getPokemonById,
	deletePokemon,
	updatePokemonData,
} = require('../helperFunctions/index.js');
 
router.get('/',async (req,res)=>{
	const {name} = req.query
	const pokemons = await getAllPokemons(name);
	pokemons.length ? res.status(200).send(setPages(pokemons)) : res.status(404).send({error:'404 Not found'}) 
})
 
router.get('/:id',async(req,res)=>{
	const {id} = req.params;
	const poke = await getPokemonById(id)
	poke?res.status(200).send(poke):res.status(404).send({error:'404 Not found'})
	
})
  
router.post('/', async (req, res) => {
	const { name, id, img, hp, attack, defense, speed, height, weight, types } = req.body;
	
	const poke = await createPokemon(name,id,img,hp,attack,defense,speed,height,weight,types);
	poke === 'error'
		? res.status(400).send({error:'404 Not found'})
		: res.status(200).send({success:'Pokemon created'});
});
  
//extra routes
router.delete('/:id',async(req,res)=>{
	const {id} = req.params;
	await deletePokemon(id)
	res.status(200).send({succes:'Pokemon deleted successfully '})
})
   
router.put('/:id',async(req,res)=>{
	const {id} = req.params;
	const { name, hp, attack, defense, speed, height, weight, img, types } = req.body;
	await updatePokemonData(id,name,hp,attack,defense,speed,height,weight,img,types)
	res.status(200).send({success:'Pokemon data was modified successfully'})
})

//helper
const setPages = (arr)=>{return  Array(Math.ceil(arr.length/12)).fill().map((e,i)=>arr.slice(((i+1)*12)-12,(i+1)*12))}

module.exports = router;