import React from "react";
import { Container, Table } from "reactstrap";

const RepositoryList = ({ repoDetails }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Repository</th>
            <th>Owner Name</th>
            <th>Description</th>
            <th>Stars</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repoDetails.map((repo) => (
            <tr>
              <th>1</th>
              <td>{repo.repo_name}</td>
              <td>@mdo</td>
              <td>{repo.description}</td>
              <td>{repo.stars_count}</td>
              <td>{repo.repo_url}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RepositoryList;
