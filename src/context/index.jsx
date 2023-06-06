import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [preloader, setPreloader] = useState(true);
  const [scroller, setScroller] = useState(null);
  const [loader, setLoader] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [joinPopup, setJoinPopup] = useState(false);
  return (
    <UserContext.Provider
      value={{
        preloader,
        setPreloader,
        loader,
        setLoader,
        scroller,
        setScroller,
        windowWidth,
        setWindowWidth,
        windowHeight,
        setWindowHeight,
        joinPopup,
        setJoinPopup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
