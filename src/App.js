import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MyNavbar from './Components/MyNavbar/MyNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar></MyNavbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
