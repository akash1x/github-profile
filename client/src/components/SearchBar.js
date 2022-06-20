import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import axios from "axios";
const SearchBar = ({ setRepoDetails }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const repoDetailsInit = {
    owner_name: "",
    repoList: [],
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setRepoDetails(repoDetailsInit);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/api/repositories`, {
        params: { username: username },
      });
      setRepoDetails(res.data);
    } catch (err) {
      console.log(err.response);
      if (err.response.status == 400) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="item">Github username</Label>
          <p className="text-danger">{error}</p>
          <Input
            type="text"
            name="username"
            id="search"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button color="dark" className="btn-margin-top">
            Search Repositories
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
