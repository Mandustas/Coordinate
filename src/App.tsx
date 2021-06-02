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

function App() {
  const { isAuth } = useTypedSelector(state => state.auth)
  const { activeOperation } = useTypedSelector(state => state.activeOperation)
  const { authChange } = useActions()
  const auth = localStorage.getItem("token") != null ? true : false
  useEffect(() => {
    authChange(localStorage.getItem("token") != null ? true : false)
    console.log(isAuth);
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className="overlay"></div>
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
