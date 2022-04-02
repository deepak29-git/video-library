export const addToPlaylist = (video,playlistDispatch) => {
    playlistDispatch({ type: "SELECTED_PLAYLIST", payload: video });
    playlistDispatch({ type: "MODAL", payload: true });
    playlistDispatch({ type: "BG", payload: "grey" });
  };
