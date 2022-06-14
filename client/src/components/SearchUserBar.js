import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import axios from "axios";
const SearchUserBar = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/api/user`, {
      params: { username: username },
    });
    setUser(res.data);
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="item">Username</Label>
          <Input
            type="text"
            name="username"
            id="search"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button color="dark" style={{ marginTop: "2rem" }}>
            Search User
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchUserBar;
