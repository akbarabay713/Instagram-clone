import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import Avatar from "@mui/material/Avatar";
import TimeAgo from "timeago-react";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";
import Comments from "./Comments";
import { useRouter } from "next/router";
import Image from "next/image";

function Post({ images, caption, username, timestamp, photoUrl, id }) {
  const [user] = useAuthState(auth);
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleComment = (e) => {
    e.preventDefault();
    fetch("/api/commentFeed", {
      method: "POST",
      body: JSON.stringify({
        comment,
        email: user.email,
        username: user.displayName,
        photo: user.photoURL,
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(e.target.reset())
      .catch((error) => {
        console.log(error);
      });
  };

  const [commentSnapshot] = useCollection(
    query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc"))
  );

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/profile/${username}`);
  };

  return (
    <div className="border w-full md:col-span-3 md:w-[648px] lg:col-span-2 col-span-3 mt-5 ">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-3 ">
          <div className="border-2 border-[#de4f94] rounded-full p-[2px]">
            <Avatar src={photoUrl} />
          </div>
          <p className="font-semibold cursor-pointer" onClick={handleClick}>
            {username}
          </p>
        </div>
        <DotsHorizontalIcon className="h-5 w-5 cursor-pointer " />
      </div>
      {/* imgg */}

      {/* <img src={images} alt="post" className="w-full h-auto" /> */}

      {/* <div className="w-72 h-72 relative flex items-center justify-center"> */}
      <Image
        src={images}
        alt="post"
        width="100%"
        height="62.5%"
        objectFit="contain"
        layout="responsive"
      />
      {/* </div> */}
      <div className="pl-3">
        {/* like */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-5">
            <HeartIcon className="h-[30px] w-[30px] cursor-pointer" />
            <svg
              aria-label="Comment"
              className="_8-yf5 cursor-pointer"
              color="#000"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                stroklinejoin="round"
                strokeWidth="2.8"
              ></path>
            </svg>
            <PaperAirplaneIcon className="h-[29px] w-[29px] cursor-pointer origin-center rotate-45" />
          </div>
          <BookmarkIcon className="h-[29px] w-[29px] cursor-pointer mr-3" />
        </div>

        {/* number of likes */}
        <span className="font-semibold text-xs">5 likes</span>
        {/* caption */}
        <p className="text-sm">
          <span className="font-semibold">{username} </span>
          {caption}
        </p>

        {/* comment */}
        {commentSnapshot?.docs?.length > 0 ? (
          <Comments
            commentSnapshot={commentSnapshot?.docs}
            images={images}
            photoUrl={photoUrl}
            username={username}
            caption={caption}
            timestamp={timestamp}
          />
        ) : null}

        {/* timeStamp */}
        <TimeAgo
          datetime={timestamp?.toDate()}
          locale="en_US"
          className="text-xs text-gray-500"
        />
        {/* add comment */}
      </div>
      <form
        onSubmit={handleComment}
        className="flex gap-3 items-center border-t w-full p-3"
        id={id}
      >
        <EmojiHappyIcon className="h-[29px] w-[29px] cursor-pointer " />
        <input
          type="text "
          placeholder="Add a comment..."
          className="flex-1 outline-none focus:ring-0"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button type="submit" className="text-blue-400 hover:text-blue-500">
          post
        </button>
      </form>
    </div>
  );
}

export default Post;
