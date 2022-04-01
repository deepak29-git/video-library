export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return { ...state, playlistVideos: action.payload };
      case "CREATE_PLAYLIST":
        return { ...state, createPlaylist: action.payload };
    default:
      return state;
  }
};
