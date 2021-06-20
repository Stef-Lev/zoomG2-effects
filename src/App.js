import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Current from "./routes/Current";
import ShowEffect from "./routes/ShowEffect";
import EditEffect from "./routes/EditEffect";
import AllEffects from "./routes/AllEffects";
import NewEffect from "./routes/NewEffect";
import Navbar from "./components/Navbar";

const MainContainer = styled.div`
  padding: 20px;
`;

// Instead of grid create table

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <MainContainer>
            <Route exact path="/" component={Current} />
            <Route exact path="/effects/new" component={NewEffect} />
            <Route exact path="/effects/:id" component={ShowEffect} />
            <Route exact path="/effects/:id/edit" component={EditEffect} />
            <Route exact path="/effects" component={AllEffects} />
          </MainContainer>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
