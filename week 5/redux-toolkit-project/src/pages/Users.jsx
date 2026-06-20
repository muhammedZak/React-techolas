import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../slice/usersSlice';

function Users() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    if (window.confirm('Are you sure, you want to delete this user?')) {
      dispatch(deleteUser(i));
    }
  };

  return (
    <div>
      <h1>Users list</h1>
      <div>
        {user.map((item, i) => (
          <div key={i}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>City: {item.city}</p>
            <button onClick={() => handleDelete(i)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
