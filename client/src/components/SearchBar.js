import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import axios from "axios";
const SearchBar = ({ setRepoDetails }) => {
  const [githubHandle, setGithubHandle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/api/profile`, {
      params: { githubHandle: githubHandle },
    });
    setRepoDetails(res.data.repoList);
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="item">Github handle</Label>
          <Input
            type="text"
            name="githubHandle"
            id="search"
            placeholder="Enter github handle"
            onChange={(e) => setGithubHandle(e.target.value)}
          />
          <Button color="dark" style={{ marginTop: "2rem" }}>
            Search Github Handle
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
