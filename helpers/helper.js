export const getUsername = (username) => {
  return username.split(" ").join("_").toLowerCase();
};
