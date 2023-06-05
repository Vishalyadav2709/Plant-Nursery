import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import About from './components/navitems/about';

import Contact from './components/navitems/contact';
import Header from './components/header/header';
import LoginHeader from './components/header/loginheader';
import Adminregister from './components/admin/adminregister';
import Adminlogin from './components/admin/adminlogin';
import AdminHomepage from './components/admin/adminhome';
import Adminproducts from './components/admin/Adminproducts';
import Viewproducts from './components/admin/products/Viewproducts';
import Products from './components/admin/products/Products'
import AdminHeader from './components/header/adminheader';
import Productss from './components/navitems/plants/Products'
import Track from './components/navitems/plants/Track';
import Book from './components/navitems/plants/Book';
import Order from './components/navitems/plants/Order';
import Bookedsucess from './components/navitems/plants/Bookedsucess';




function App() {

  const [ user, setLoginUser] = useState({})
  const [ user1, setLoginUser1] = useState({})
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginHeader/>
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route  path="/adminhome">
            <LoginHeader/>
            {
              user1 && user1._id ? <AdminHomepage setLoginUser1={setLoginUser1} /> : <Adminlogin setLoginUser1={setLoginUser1}/>
            }
          </Route>
          <Route path="/login">
          <LoginHeader/>

            <Login setLoginUser={setLoginUser}/>
          
          </Route>
          <Route path="/adminlogin">
          <LoginHeader/>

            <Adminlogin setLoginUser1={setLoginUser1}/>
          
          </Route>
          <Route path="/register">
          <LoginHeader/>
          
          
            <Register />
          </Route>

          <Route path="/adminregister">
          <LoginHeader/>
          
          
            <Adminregister />
          </Route>

          <Route path="/adminproducts">
            {/* <Header/> */}
            {
              user1 && user1._id ? <Adminproducts setLoginUser1={setLoginUser1} /> : <Adminlogin setLoginUser1={setLoginUser1}/>
            }
            
            
          </Route>

          <Route path="/viewproducts">
            {/* <Header/> */}
            {
              user1 && user1._id ? <Viewproducts setLoginUser1={setLoginUser1} /> : <Adminlogin setLoginUser1={setLoginUser1}/>
            }
            
            
          </Route>

          <Route path="/products">
            <AdminHeader />
            {
              user1 && user1._id ? <Products setLoginUser1={setLoginUser1} /> : <Adminlogin setLoginUser1={setLoginUser1}/>
            }
            
            
          </Route>


          <Route path="/about">
            <Header/>
          {
              user && user._id ? <About setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
            
            
          </Route>
          <Route path="/productss">
          <Header />
          {
              user && user._id ? <Productss setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/contact">
          {
              user && user._id ? <Contact setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/track">
          {
              user && user._id ? <Track setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/book">
          {
              user && user._id ? <Book setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/order">
          {
              user && user._id ? <Order setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/ordersuccess">
          {
              user && user._id ? <Bookedsucess setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/header">
            <Header  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;