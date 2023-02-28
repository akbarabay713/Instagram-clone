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
      <img
        src={avatar}
        alt="avatar"
        className={`w-${width} h-${height} rounded-full ${
          border ? "p-[2px] border-2 border-[#de4f94]" : null
        }  object-cover`}
      />
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
