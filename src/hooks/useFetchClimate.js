import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const { 
    VITE_OPENW_API_BASE_URL,
    VITE_OPENW_API_KEY
} = import.meta.env

export const useFetchClimate = () => {

    const { openwConfig } = useSelector(state => state.config)

    const [ climateState, setClimateState ] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    
    useEffect(() => {
        getCurrent()
    }, [openwConfig])

    const getCurrent = async () => {
        setClimateState({
            isLoading: true,
            ...climateState
        })

        try {

            const response = await fetch(`${VITE_OPENW_API_BASE_URL}/weather?q=${openwConfig.city}&units=${openwConfig.units}&appid=${VITE_OPENW_API_KEY}`)
            const result = await response.json()

            // await new Promise(resolve => setTimeout(resolve, 2000))
            
            setClimateState({
                data: result,
                isLoading: false,
                hasError: null
            })
            
        } catch (error) {
            console.log({error})
            setClimateState({
                data: {},
                isLoading: false,
                hasError: error
            })
        }
    }
    return {
        climateState
    }
}