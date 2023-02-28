import React from "react";
import Post from "./Post";
import Stories from "./Stories";
import Sugesstion from "./Sugesstion";

function Content({ signOut, profileImg, username, comment, posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center lg:w-[61rem] px-3 mt-16 mx-auto">
      <Stories />
      <Sugesstion
        onSignOut={signOut}
        profileImg={profileImg}
        username={username}
      />
      {posts?.map((doc) => {
        return (
          <Post
            key={doc.id}
            id={doc.id}
            images={doc.data().images}
            username={doc.data().username}
            caption={doc.data().caption}
            timestamp={doc.data().timestamp}
            photoUrl={doc.data().profileImg}
            onComment={comment}
          />
        );
      })}
    </div>
  );
}

export default Content;
