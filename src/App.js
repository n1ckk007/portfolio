import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutUsPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/projects/:id" component={ProjectDetail} />
      </Switch>
    </div>
  );
}

export default App;
