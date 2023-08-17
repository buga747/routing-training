import React from 'react';

const UserBar = ({ logout }) => {
  return (
    <div>
      Hello User!
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserBar;
