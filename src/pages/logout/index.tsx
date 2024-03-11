import { useEffect } from "react"
import { useApolloClient } from "@apollo/client"
import { setJwtToken, setRefreshToken } from "../../utils/jwt"
import { useNavigate } from "react-router-dom"
import { useLogoutQuery } from "../../graphql-definition/graphql"

function Logout() {
    const client = useApolloClient()
    const navigate = useNavigate()
    const { data, loading, error } = useLogoutQuery();


    useEffect(() => {
        if (data && data.logout) {
            setJwtToken("")
            setRefreshToken("")
            window.localStorage.setItem('logout', Date.now().toString());
            client.resetStore().then(() => {
                navigate('..')
            })
        }
    }, [data, navigate, client])

    if (loading) return <p>Signing out...</p>;
    if (error) return <p>Error while signing out</p>;

    return null;
}

export default Logout
