import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Operations from './components/Operations';
import OperationPageSidebar from './components/OperationPageSidebar';
import ImagesPage from './components/ImagesPage';
import MissionsPage from './components/MissionsPage';
import ReviewPage from './components/ReviewPage';
import TargetPanel from './components/TargetPanel';
import { useTypedSelector } from './hooks/useTypedSelector';
import Home from './components/Home';
import { useActions } from './hooks/useActions';
import * as signalR from "@microsoft/signalr";
import config from "../src/config/config.json"


function App() {
  const { isAuth } = useTypedSelector(state => state.auth)
  const { activeOperation, loading } = useTypedSelector(state => state.activeOperation)
  const { authChange, fetchActiveOperations } = useActions()
  const auth = localStorage.getItem("token") != null ? true : false

  const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(config.API_SERVER_URL + "notification")
    .build();
  // hubConnection.on("Send", data => {
  //   console.log(data);
  // });

  hubConnection.start().then(() => console.log("Connection created!")).catch(() => console.log("Connection bad"));

  useEffect(() => {
    authChange(localStorage.getItem("token") != null ? true : false)
  }, [])

  useEffect(() => {
    hubConnection.on("SendMessage", message => {
      fetchActiveOperations()
    }); 
  })

  return (
    <div className="App">
      <Header></Header>
      <div className={`overlay ${loading ? "active" : null}`} ></div>
      {
        loading
          ?
          <div className="spinner-wrapper">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
          :
          null
      }

      <OperationPageSidebar></OperationPageSidebar>
      {
        activeOperation != null && activeOperation.targets.length > 0
          ? <TargetPanel></TargetPanel>
          : null
      }

      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact
              path='/'
              render={() => auth ? <Redirect to="/operation/missions" /> : <Redirect to="/home" />}
            >
            </Route>
            <Route
              path='/operations'
              render={() => auth ? <Operations /> : <Redirect to="/home" />}></Route>
            <Route
              path='/home'
              component={Home}></Route>
            <Route
              path='/operation/review'
              render={() => auth ? <ReviewPage /> : <Redirect to="/home" />} ></Route>
            <Route
              path='/operation/images'
              render={() => auth ? <ImagesPage /> : <Redirect to="/home" />}></Route>
            <Route
              path='/operation/missions'
              render={() => auth ? <MissionsPage /> : <Redirect to="/home" />}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer></Footer>
    </div>


  );
}

export default App;
