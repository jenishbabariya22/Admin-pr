import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {

    const [auth, setauth] = useState({
        user: null
    })

    useEffect(() => {
        const loginuser = JSON.parse(localStorage.getItem("userlogin"))
        if (loginuser) {
            setauth({
                ...auth,
                user: loginuser
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={[auth, setauth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }