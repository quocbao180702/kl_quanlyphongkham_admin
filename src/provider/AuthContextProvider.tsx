import React, { Children, Dispatch, ReactNode, SetStateAction, createContext, useCallback, useEffect, useState } from "react";
import { getJwtToken, getRefreshToken, setJwtToken, setRefreshToken } from "../utils/jwt";
import { OnlyUserQuery, Users, useOnlyUserLazyQuery } from "../graphql-definition/graphql";

interface IAuthContext {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    checkAuth: () => Promise<void>;
    profile: any | undefined;
    setProfile: Dispatch<SetStateAction<any | undefined>>;
    logoutClient: () => void;
}

const defaultIsAuthenticated = false;

export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: defaultIsAuthenticated,
    setIsAuthenticated: () => { },
    checkAuth: () => Promise.resolve(),
    profile: undefined,
    setProfile: () => { },
    logoutClient: () => { }
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultIsAuthenticated);
    const [profile, setProfile] = useState<any | undefined>(undefined);

    const [getData, { data }] = useOnlyUserLazyQuery();

    useEffect(() => {
        if (data?.onlyUser) {
            setProfile(data?.onlyUser);
        }
    }, [data?.onlyUser]);

    useEffect(() => {
        console.log('Updated profile: ', profile);
    }, [profile]);

    const checkAuth = useCallback(async () => {
        const token = getJwtToken();

        if (token) {
            setIsAuthenticated(true);
            getData();
        }
    }, [getData]);

    const logoutClient = () => {
        setJwtToken("");
        setRefreshToken("");
        setProfile(undefined);
        setIsAuthenticated(false);
    };

    const authContextData = {
        isAuthenticated,
        setIsAuthenticated,
        checkAuth,
        profile,
        setProfile,
        logoutClient
    };

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
