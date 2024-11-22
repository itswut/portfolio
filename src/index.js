import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import App from './App';
import secondPage from './secondPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/portfolio' exact component={App}/>
         <Route path='/portfolio/secondpage' exact component={secondPage}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;