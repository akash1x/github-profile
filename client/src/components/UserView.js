import React from "react";
import SearchUserBar from "./SearchUserBar";
import UserDetail from "./UserDetail";
const UserView = ({ user, setUser }) => {
  return (
    <div>
      <SearchUserBar setUser={setUser} />
      <UserDetail user={user} />
    </div>
  );
};

export default UserView;
