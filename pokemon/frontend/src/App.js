import styles from './App.module.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Detail from './components/Detail/Detail.jsx'
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx'
import { Favourite } from './components/Favourites/Favourite.jsx'



const App = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route exact path = '/' element={<Landing/>}/>
        <Route path = '/home' element={<Home/>}/>
        <Route path = '/pokemonDetail/:id' element={<Detail/>}/>
        <Route path = '/CreatePokemon' element={<CreatePokemon/>}/>
        <Route path = '/favourites' element={<Favourite/>}/>
      </Routes>
    </div>
  )
}
 
export default App;
