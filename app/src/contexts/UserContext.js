import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userContext, setUserContext] = useState({});

  return (
    <UserContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
