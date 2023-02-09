import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const data = {
  darkTheme: true,
  user: {},
  isLogin: null,
  testing: "sdjdfdfjdfjeifjsief",
  baseURL: "https://ec9d-175-107-203-27.ngrok.io",
};
// type myContextType = {
//   darkTheme: boolean;
//   user: {};
//   isLogin: boolean | null;
//   testing: string;
//   baseURL: string;
// };

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);
  return (
     <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const GlobalContext = createContext({ state: data, dispatch: null });
