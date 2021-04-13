import { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import $ from "jquery"
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Operations from './components/Operations';
import TargetsPage from './components/TargetsPage';
import OperationPageSidebar from './components/OperationPageSidebar';
import MembersPage from './components/MembersPage';
import ImagesPage from './components/ImagesPage';
import MissionsPage from './components/MissionsPage';
import CreateOperation from './components/-CreateOperation';
import ReviewPage from './components/ReviewPage';

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
            <Route exact path='/' component={MissionsPage}></Route>
            <Route path='/operations' component={Operations}></Route>
            <Route path='/operation/review' component={ReviewPage}></Route>
            <Route path='/operation/targets' component={TargetsPage}></Route>
            <Route path='/operation/members' component={MembersPage}></Route>
            <Route path='/operation/images' component={ImagesPage}></Route>
            <Route path='/operation/missions' component={MissionsPage}></Route>
            <Route path='/operation/create' component={CreateOperation}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer></Footer>
    </div>


  );
}

export default App;
