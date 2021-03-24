import React, { Children, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import $ from "jquery"
import Footer from './components/Footer';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Operations from './components/Operations';
import TargetsPage from './components/TargetsPage';
import OperationPageSidebar from './components/OperationPageSidebar';
import MembersPage from './components/MembersPage';
import OperationPageContainer from './components/OperationPageContainer';
import ImagesPage from './components/ImagesPage';
import ObjectsPage from './components/ObjectsPage';
import MissionsPage from './components/MissionsPage';
import OperationPageHeader from './components/OperationPageHeader';

function App() {
  useEffect(() => {
    const heightR = $(window).height() as any;
    $('.App').css("min-height", heightR);
  });

  return (
    <div className="App">
      <Header></Header>
      <div className="overlay"></div>  {/* Для затемнения сайдбара */}
      <OperationPageSidebar></OperationPageSidebar>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path='/' component={Operations}></Route>
            <Route path='/operation/review' component={OperationPageContainer}></Route>
            <Route path='/operation/targets' component={TargetsPage}></Route>
            <Route path='/operation/members' component={MembersPage}></Route>
            <Route path='/operation/images' component={ImagesPage}></Route>
            <Route path='/operation/objects' component={ObjectsPage}></Route>
            <Route path='/operation/missions' component={MissionsPage}></Route>
            <Route path='/operation/create' component={OperationPageHeader}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer></Footer>
    </div>


  );
}

export default App;
