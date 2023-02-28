import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import ProfilePicture from "./ProfilePicture";
import { useRouter } from "next/router";
import { getUsername } from "./../helpers/helper";
// import { useAuthState } from "react-firebase-hooks/auth";
function Sugesstion({ onSignOut, profileImg, username }) {
  const [data, setData] = useState([]);
  const router = useRouter();
  // const [user] = useAuthStatee(auth);
  useEffect(() => {
    const randomCard = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setData(randomCard);
  }, []);
  // console.log(username);

  const handleClick = () => router.push(`/profile/${getUsername(username)}`);

  return (
    <div className="relative w-full  hidden  pl-9 lg:inline-grid col-span-1 ">
      <div className="fixed mt-[-25px]">
        <div className="flex justify-between mb-5">
          <div onClick={handleClick} className="flex items-center gap-3 ">
            <Avatar className="cursor-pointer h-20 w-20" src={profileImg} />
            <p className="hover:cursor-pointer">{username}</p>
          </div>
          <button
            className="border-0 text-blue-500 text-xs font-semibold"
            onClick={onSignOut}
          >
            Log Out
          </button>
        </div>
        <div className="flex items-center justify-between w-72 ">
          <p className="text-sm font-semibold text-gray-500">
            Suggestion for you
          </p>
          <p className="text-xs font-medium">See All</p>
        </div>

        {/* <div className="flex items-center gap-3 "> */}
        {data.map((d, i) => {
          return (
            <div className="flex justify-between mt-3" key={i}>
              <ProfilePicture
                username={d.username}
                avatar={d.avatar}
                width={9}
                height={9}
                flex={true}
              />
              <button className="border-0 text-blue-500 text-xs font-semibold">
                Follow
              </button>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Sugesstion;
