import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [sidebar,setSidebar]=useState("-300px")
  const [search,setSearch]=useState(null)

  return (
    <DataContext.Provider value={{ data, setData ,sidebar,setSidebar,search,setSearch}}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
