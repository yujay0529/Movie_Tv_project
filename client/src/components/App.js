import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import TvLandingPage from "./views/LandingPage/TvLandingPage.js";
import MovieLandingPage from "./views/LandingPage/MovieLandingPage.js";
import CalenderPage from "./CalenderComponents/App/App2.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import TvDetail from './views/TvDetail/TvDetail';
import MovieDetail from './views/MovieDetail/MovieDetail';
import MovieLikeListView from './views/MovieDetail/Sections/MovieLikeListView';
import Map from './views/Map/Map';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(MovieLandingPage, null)} />
          <Route exact path="/tv" component={Auth(TvLandingPage, null)} />
          <Route exact path="/calender" component={Auth(CalenderPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/join" component={Auth(RegisterPage, false)} />
          <Route exact path="/tv/:tvId" component={Auth(TvDetail, null)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/likeList" component={Auth(MovieLikeListView, null)} />
          <Route exact path="/map" component={Auth(Map, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
