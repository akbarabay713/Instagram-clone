import React from "react";

function Comment({ username, comment }) {
  return (
    <p className="text-sm">
      <span className="font-semibold">{username} </span>
      {comment}
    </p>
  );
}

export default Comment;
