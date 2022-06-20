import "./stylesheets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import RepositoryView from "./components/RepositoryView";
import UserView from "./components/UserView";
import AppNavBar from "./components/AppNavBar";
import HomeView from "./components/HomeView";

function App() {
  const repoDetailsInit = {
    owner_name: "",
    repoList: [],
  };
  const [repoDetails, setRepoDetails] = useState(repoDetailsInit);
  const [user, setUser] = useState({});

  return (
    <Router>
      <Container>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route
            path="/searchRepos"
            element={
              <RepositoryView
                repoDetails={repoDetails}
                setRepoDetails={setRepoDetails}
              />
            }
          />
          <Route
            path="/searchUser"
            element={<UserView user={user} setUser={setUser} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
