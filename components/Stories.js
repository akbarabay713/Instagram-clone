import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";

function Stories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const randomCard = [...Array(30)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setData(randomCard);
  }, []);

  return (
    <div className="border w-full md:col-span-3 md:w-[648px] lg:col-span-2 col-span-3 mt-5">
      <div className="flex overflow-scroll scrollbar-hide p-4 gap-5 ">
        {data.map((d) => (
          <ProfilePicture
            key={d.id}
            avatar={d.avatar}
            username={d.username}
            width="20"
            height="20"
            width2="12"
            flex={false}
            border={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Stories;
