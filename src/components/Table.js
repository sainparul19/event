import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../App";

function Table() {
  const studentData = useContext(StudentContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(studentData);
  }, [studentData]);

  const handleClick = (student_id_index) => {
    const temp = posts;
    temp[student_id_index].is_paid = true;
    setPosts([...temp]);
  };

  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Mark as Paid</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.name}</td>
                <td>{post.email_id}</td>
                <td>
                  {post.is_paid} {post.is_paid ? "yes" : "no"}
                </td>
                <td>
                  {post.is_paid ? (
                    " "
                  ) : (
                    <button onClick={() => handleClick(index)}>Not Paid</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
