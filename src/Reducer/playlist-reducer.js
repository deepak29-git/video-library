export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return { ...state, playlistVideos: action.payload };
      case "CREATE_PLAYLIST":
        return { ...state, createPlaylist: action.payload };
        case "MODAL":
          return { ...state, modal: action.payload };
          case "BG":
            return { ...state, bg: action.payload };
            case "SELECTED_PLAYLIST":
            return { ...state, selectedPlaylist: action.payload };
    default:
      return state;
  }
};
