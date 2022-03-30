import {
  createContext,
  useContext,
  useReducer,
} from "react";

import { watchReducer } from "../Reducer/watch-reducer";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchReducer, {
        watchedVideo:[]
    });
   
  return (
    <WatchLaterContext.Provider value={{watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };
