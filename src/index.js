import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './HomePage';
import secondPage from './secondPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/portfolio' exact component={HomePage}/>
         <Route path='/portfolio/secondpage' exact component={secondPage}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;