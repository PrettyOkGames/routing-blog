import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"

function AdminPage() {

    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <main>
            <h2>Admin Page</h2>
        </main>
    )
}

export default AdminPage