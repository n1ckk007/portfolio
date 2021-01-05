import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUsPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/projects/:id" component={ProjectDetail} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
