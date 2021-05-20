import { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Operations from './components/Operations';
import OperationPageSidebar from './components/OperationPageSidebar';
import ImagesPage from './components/ImagesPage';
import MissionsPage from './components/MissionsPage';
import ReviewPage from './components/ReviewPage';
import TargetPanel from './components/TargetPanel';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const {  activeOperation } = useTypedSelector(state => state.activeOperation)
  const { fetchActiveOperations } = useActions()
  useEffect(() => {
    fetchActiveOperations()

  }, [])
  return (
    <div className="App">
      <Header></Header>
      <div className="overlay"></div>  {/* Для затемнения сайдбара */}
      <OperationPageSidebar></OperationPageSidebar>
      {
        activeOperation != null
          ? <TargetPanel></TargetPanel>
          : null
      }


      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path='/' component={activeOperation != null
              ? MissionsPage
              : Operations}>
            </Route>
            <Route path='/operations' component={Operations}></Route>
            <Route path='/operation/review' component={ReviewPage}></Route>
            <Route path='/operation/images' component={ImagesPage}></Route>
            <Route path='/operation/missions' component={MissionsPage}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer></Footer>
    </div>


  );
}

export default App;
