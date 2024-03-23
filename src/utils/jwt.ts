import { isExpired, decodeToken } from "react-jwt";
/* const JWManager = () => {
    let inMemoryToken: string | null = null

    const getToken = () => inMemoryToken

    const setToken = (access_token: string) => {
        inMemoryToken  = access_token
        console.log("Memory",inMemoryToken);
    }

    return { getToken, setToken}
}
export default JWManager() */


export function getJwtToken() {
    return sessionStorage.getItem("jwt")
}

export function setJwtToken(token: string) {
    sessionStorage.setItem("jwt", token)
}

export function getRefreshToken() {
    return sessionStorage.getItem("refreshToken")
}

export function setRefreshToken(token: string) {
    sessionStorage.setItem("refreshToken", token)
}
