import Image from "next/image";
function ProfilePicture({
  avatar,
  username,
  width,
  height,
  flex,
  border,
  width2 = "16",
}) {
  return (
    <div
      className={`w-${width2} shrink-0 ${
        flex ? "flex items-center gap-3" : null
      }`}
    >
      <div
        className={`w-${width} h-${height} rounded-full ${
          border ? "p-[2px] border-2 border-[#de4f94]" : null
        }  object-cover relative`}
      >
        <Image
          src={avatar}
          alt="avatar"
          className={`rounded-full `}
          width={150}
          height={150}
        />
      </div>
      <p
        className={`${
          !flex ? "truncate" : null
        } text-xs text-slate-800 text-center `}
      >
        {username}
      </p>
    </div>
  );
}

export default ProfilePicture;
