import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginAsGuest, startConfig } from "../store"

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)
    const { isSetUp } = useSelector(state => state.config)

    const dispatch = useDispatch()

    useEffect(() => {

        //TODO: Check user 

        if(!isSetUp) {
            dispatch(startConfig())
        }
        
        if(status === 'checking') dispatch(loginAsGuest())
    }, [])

    return {
        status,
        isSetUp
    }
 
}