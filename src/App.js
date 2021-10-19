
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './pages/Home/Header/Header';
import ServicesLoad from './pages/Home/Services/ServicesLoad/ServicesLoad';
import AuthContextProvider from './Context/authContextProvider';
import Appointment from './pages/Home/Services/Appointment/Appointment';
import Confirm from './pages/Confirm/Confirm';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import AllProduct from './pages/Product/AllProduct/AllProduct';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/Home/About/About';
import Footer from './pages/Footer/Footer';
import ServiceDetail from './pages/Home/Services/ServiceDetail/ServiceDetail';

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
            <Footer></Footer>         
        </Route>
        <PrivateRouter path="/service/:serviceKey">
          <Header></Header>
              <ServiceDetail></ServiceDetail>
          <Footer></Footer>
        </PrivateRouter>
        <PrivateRouter path="/appointment">
          <Header></Header>
          <Appointment></Appointment>
          <Footer></Footer>
        </PrivateRouter>
        <Route path="/login">
          <Header></Header>
          <Login></Login>
          <Footer></Footer>
        </Route>
        <Route path="/confirm">
          <Header></Header>
            <Confirm></Confirm>
            <Footer></Footer>
        </Route>
        <PrivateRouter path="/shop">
              <Header></Header>
              <AllProduct></AllProduct>
              <Footer></Footer>
        </PrivateRouter>
        <Route path="/about">
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
