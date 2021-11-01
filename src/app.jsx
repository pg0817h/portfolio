
import './App.css';
import Homepage from './pages/home';
import {BrowserRouter as Router,Route,Switch, useParams, Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" component ={Homepage} />
    </Switch>
    </Router>
  );
}

export default App;
