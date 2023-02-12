const { Router } = require('express');
const router = Router()
 
const pRoutes = require('./pokemonRoutes.js')
const tRoutes = require('./typesRoutes.js')
const iRoutes = require('./imagesRoutes.js')

router.use('/pokemons',pRoutes);
router.use('/types',tRoutes);
router.use('/images',iRoutes);



module.exports = router;
