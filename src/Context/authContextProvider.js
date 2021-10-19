import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const authContext = createContext();
const AuthContextProvider = ({children}) => {
    const Allcontext = useFirebase()
    return (
        <authContext.Provider value={Allcontext}>
                {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;