import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import Home from "./views/Home";
import Archive from "./views/Archive";
import NotFound from "./views/NotFound";

// Track route changes
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

const App = () => {
  ReactGA.initialize("G-DK2HG29J21");

  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
