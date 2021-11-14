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
// import Playlists from "./pages/Playlists/Playlists";
import Movies from "./pages/Movies/Movies";
// import Gifts from "./pages/Gifts/Gifts";
// import Activities from "./pages/Activities/Activities";
import CreateMoodboard from "./pages/CreateMoodboard/CreateMoodboard";
import NotFound from "./pages/404/404";

// PROVIDERS
import { MoodboardsProvider } from "./contexts/MoodboardContext";
import { UIProvider } from "./contexts/UIContext";

// import history from "./utils/history";


function App() {
  return (
    <Router>
      <ToastProvider autoDismiss={true}>
        <UIProvider>
          <MoodboardsProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipes"
              component={Recipes} />
              <Route path="/movies" component={Movies} />
              <Route path="/create-moodboard" component={CreateMoodboard} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MoodboardsProvider>
        </UIProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
