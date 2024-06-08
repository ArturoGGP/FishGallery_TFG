import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext({
    usuario: null,
    token: null,
    setUsuario: () => {},
    manejarToken: () => {}
});

export function ContextProvider({ children }) {
    const [usuario, setUsuario] = useState({
        name: 'Anónimo'
    });
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    function manejarToken(token) {
        setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            usuario,
            token,
            setUsuario,
            manejarToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export function useStateContext() {
    return useContext(StateContext);
}
