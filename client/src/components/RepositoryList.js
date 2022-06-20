import React from "react";
import { Container, Table } from "reactstrap";

const RepositoryList = ({ repoDetails }) => {
  console.log(repoDetails);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Owner Name</th>
            <th>Description</th>
            <th>Stars</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repoDetails.repoList.map((repo) => (
            <tr>
              <td>{repo.repo_name}</td>
              <td>{repoDetails.owner_name}</td>
              <td>{repo.description}</td>
              <td>{repo.stars_count}</td>
              <td>
                <a href={repo.repo_url}>{repo.repo_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RepositoryList;
