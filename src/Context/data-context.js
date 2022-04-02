import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [sidebar,setSidebar]=useState("-300px")
  return (
    <DataContext.Provider value={{ data, setData ,sidebar,setSidebar}}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
