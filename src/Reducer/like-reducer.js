export const likeReducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return { ...state, likedVideo: action.payload };
    case "DISLIKE":
      return { ...state, likedVideo: action.payload };
    default:
      return state;
  }
};
