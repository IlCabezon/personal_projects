const { Router } = require('express');
const router = Router();
const {
	getAllDbTypes,
} = require('../helperFunctions/dbFunctions');

router.get('/',async (req,res)=>{
	const types = await getAllDbTypes();
	
	types ? res.status(200).send(types) : res.status(404).send({error:'error'})
})
 
module.exports = router;