export const watchReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLATER":
      return { ...state, watchedVideo: action.payload };
    case "DELETE_FROM_WATCHLATER":
      return { ...state, watchedVideo: action.payload };
    default:
      return state;
  }
};
