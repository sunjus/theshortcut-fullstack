import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>
        {user.firstName} {user.address}
      </p>
    </div>
  );
};

export default User;
