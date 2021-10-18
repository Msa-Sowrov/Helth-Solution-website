import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './pages/Home/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Header></Header>
          <Login></Login>

        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
