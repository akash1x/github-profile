import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import RepositoryList from "./components/RepositoryList";
import { useState } from "react";
import SearchUserBar from "./components/SearchUserBar";
import UserDetail from "./components/UserDetail";
function App() {
  const [repoDetails, setRepoDetails] = useState([]);
  const [user, setUser] = useState({});

  return (
    <div>
      <SearchBar setRepoDetails={setRepoDetails} />
      <SearchUserBar setUser={setUser} />
      <RepositoryList repoDetails={repoDetails} />
      <UserDetail user={user} />
    </div>
  );
}

export default App;
