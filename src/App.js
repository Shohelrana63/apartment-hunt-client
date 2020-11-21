import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails'
import Login from './components/Login/Login';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddHouse from './components/Dashboard/AddHouse/AddHouse';
import MyRent from './components/Dashboard/MyRent/MyRent';
import PrivateRoute from './components/Login/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });


  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home/:id">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login> </Login>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <PrivateRoute path="/dashboard/addHouse">
            <AddHouse></AddHouse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/myRent">
            <MyRent></MyRent>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookingList">
            <BookingList />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;