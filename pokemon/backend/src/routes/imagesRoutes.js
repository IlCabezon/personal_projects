const { Router } = require('express');
const router = Router();
const {
	defaultImages
} = require('../helperFunctions/dbFunctions.js');

router.get('/',async(req,res)=>{
	const img = await defaultImages();
	img.length ? res.status(200).send(img) : res.status(404).send({error:'404 Not found'})
})
 
module.exports = router;