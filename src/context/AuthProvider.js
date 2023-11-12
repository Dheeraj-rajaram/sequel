import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext

// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ Children }) => {
//     const [auth, setAuth] = useState({});

//     return(
//         <AuthContext.Provider value={{auth, setAuth}}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }
