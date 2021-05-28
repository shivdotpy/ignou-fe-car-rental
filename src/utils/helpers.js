export const getUserIdFromLocalStorage = () => {
  const userJSON = JSON.parse(localStorage.getItem("user"));
  return userJSON.user_id;
};
