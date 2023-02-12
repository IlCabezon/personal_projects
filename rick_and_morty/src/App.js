import './App.css';
import {Route,Switch} from 'react-router'; // npm install react router dom
import Home from './components/Home/Home'
import Landing  from './components/Landing/Landing';
import Form from './components/Form/Form';
import InfoCards from './components/InfoCards/InfoCards'


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/InfoCards'>
          <InfoCards />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
      </Switch>
    </div>
  )
}

export default App;