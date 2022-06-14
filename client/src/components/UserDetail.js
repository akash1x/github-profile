import React from "react";
import { Container, Table } from "reactstrap";

const UserDetail = ({ user }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile Picture</th>
            <th>Followers</th>
            <th>Followings</th>
            <th>Total Repository</th>
            <th>Member since</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user.name}</th>
            <td>
              <a
                href={`https://github.com/${user.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={user.image_url} height="50px" width={"50px"} />
              </a>{" "}
            </td>
            <td>{user.followers_count}</td>
            <td>{user.following_count}</td>
            <td>{user.repository_list_size}</td>
            <td>{user.member_since}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default UserDetail;
