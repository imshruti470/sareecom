import { createContext } from "react";
export const AppContext=createContext();

const ContextProvider=(props)=>{
  const phn="1234567890";
  return (
    <AppContext.Provider value={phn}>
      {props.children}
    </AppContext.Provider>
  );
}
export default ContextProvider;
