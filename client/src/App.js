import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepositoryView from "./components/RepositoryView";
import UserView from "./components/UserView";
import AppNavBar from "./components/AppNavBar";

function App() {
  const repoDetailsInit = {
    owner_name: "",
    repoList: [],
  };
  const [repoDetails, setRepoDetails] = useState(repoDetailsInit);
  const [user, setUser] = useState({});

  return (
    <Router>
      <AppNavBar />
      <Routes>
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
    </Router>
  );
}

export default App;
