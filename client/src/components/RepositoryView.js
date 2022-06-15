import React from "react";
import SearchBar from "./SearchBar";
import RepositoryList from "./RepositoryList";

const RepositoryView = ({ repoDetails, setRepoDetails }) => {
  return (
    <div>
      <SearchBar setRepoDetails={setRepoDetails} />
      <RepositoryList repoDetails={repoDetails} />
    </div>
  );
};

export default RepositoryView;
