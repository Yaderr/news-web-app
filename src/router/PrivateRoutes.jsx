import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {

    // TODO: private routes logic

    const { status } = useSelector(state => state.auth)

    if(status === 'authenticated') {
        return children
    }

    return <Navigate to="/auth" /> ///?show=loginModal

}