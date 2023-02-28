import Comment from "./Comment";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  BookmarkIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import TimeAgo from "timeago-react";
function Comments({
  commentSnapshot,
  images,
  photoUrl,
  username,
  caption,
  timestamp,
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={`h-auto scrollbar-hide`}>
      <Dialog
        className="grid place-items-center "
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "85%", // Set your width here
              height: "90%",
            },
          },
        }}
      >
        <div className="flex p-5 justify-center items-center h-full">
          <div className="w-[60%] h-[80]">
            <img src={images} alt="post" className=" object-contain" />
          </div>
          <div className="w-[40%] ">
            <div className="flex justify-between items-center p-3 shadow">
              {/* <div className="border-2 border-[#de4f94] rounded-full p-[2px]"> */}
              <ProfilePicture
                avatar={photoUrl}
                flex={true}
                border={true}
                width={10}
                height={10}
                username={username}
              />
              {/* </div> */}
              <DotsHorizontalIcon className="h-5 w-5 cursor-pointer " />
            </div>

            <div className="pl-3 mt-5">
              {/* comment */}
              {commentSnapshot.map((doc, i) => {
                return (
                  <Comment
                    key={i}
                    username={doc.data().username}
                    comment={doc.data().comment}
                  />
                );
              })}
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

              {/* timeStamp */}
              <TimeAgo
                datetime={timestamp?.toDate()}
                locale="en_US"
                className="text-xs text-gray-500"
              />
              {/* add comment */}
            </div>
            <form
              // onSubmit={handleComment}
              className="flex gap-3 items-center border-t w-full p-3 "
              // id={id}
            >
              <EmojiHappyIcon className="h-[29px] w-[29px] cursor-pointer " />
              <input
                type="text "
                placeholder="Add a comment..."
                className="flex-1 outline-none focus:ring-0"
                // onChange={(e) => setComment(e.currentTarget.value)}
              />
              <button
                type="submit"
                className="text-blue-400 hover:text-blue-500"
              >
                post
              </button>
            </form>
          </div>
        </div>
      </Dialog>
      {commentSnapshot.length >= 2 ? (
        <p
          className="text-gray-400 text-sm cursor-pointer"
          onClick={handleOpen}
        >
          View all {commentSnapshot.length} comments
        </p>
      ) : null}

      {
        commentSnapshot.slice(0, 2).map((doc, i) => {
          return (
            <Comment
              key={i}
              username={doc.data().username}
              comment={doc.data().comment}
            />
          );
        })
        // .sort((a, b) => a.data().timestamp - b.data().timestamp)
      }
    </div>
  );
}

export default Comments;
