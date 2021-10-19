
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './pages/Home/Header/Header';
import ServicesLoad from './pages/Home/Services/ServicesLoad/ServicesLoad';
import AuthContextProvider from './Context/authContextProvider';
import Appointment from './pages/Home/Services/Appointment/Appointment';
import Confirm from './pages/Confirm/Confirm';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Header></Header>
            <ServicesLoad></ServicesLoad>         
        </Route>
        <Route path="/service/:serviceName">
          <Header></Header>
          <Appointment></Appointment>
        </Route>
        <Route path="/login">
          <Header></Header>
          <Login></Login>
        </Route>
        <Route path="/confirm">
          <Header></Header>
            <Confirm></Confirm>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
