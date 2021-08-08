import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Details from "./pages/Details";
import SearchPage from "./pages/SearchPage";
import bgImage from "../assets/wallpaperB.jpg";
import logoImage from "../assets/logo.png";

const App = () => {
  return (
    <div
      className="px-0 pb-10 m-0 min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Router>
        <header className="w-full mb-5 flex justify-center">
          <Link
            to="/"
            className="w-auto flex justify-center hover:bg-gray-100 hover:opacity-60 hover:shadow-xl transition duration-200 rounded-b-3xl px-10 py-5"
          >
            <img src={logoImage} alt="Adopt Me!" className="" />
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id" component={Details} />
          <Route path="/:page" component={SearchPage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
