import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

// CSS
import "./App.css";

// PAGES
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Playlists from "./pages/Playlists/Playlists";
import Movies from "./pages/Movies/Movies";
import Gifts from "./pages/Gifts/Gifts";
import Activities from "./pages/Activities/Activities";
import NotFound from "./pages/404/404";

// PROVIDERS
import { MoodboardsProvider } from "./contexts/MoodboardContext";

// import history from "./utils/history";


function App() {
  return (
    <Router>
      <ToastProvider autoDismiss={true}>
        {/* <MoodboardsProvider> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes"
            component={Recipes} />
            <Route path="/playlists"
            component={Playlists}/>
            <Route path="/movies" component={Movies} />
            <Route path="/gifts" component={Gifts} />
            <Route path="/activities" component={Activities} />
            <Route path="*" component={NotFound} />
          </Switch>
        {/* </MoodboardsProvider> */}
      </ToastProvider>
    </Router>
  );
}

export default App;
