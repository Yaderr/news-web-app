import { setConfig } from "./configSlice"

const {
    VITE_IP_API_BASE_URL
} = import.meta.env

export const startConfig = () => {
    
    return async (dispatch) => {

        try {

            const { country, city } = await fetch(`${VITE_IP_API_BASE_URL}/json`, {
                
            }).then(res => res.json())

            //await new Promise(resolve => setTimeout(resolve, 10000))

            const config = {
                isSetUp: true,
                country: 'US', //country,
                language: navigator.languages[1],
                openwConfig: {
                    units: 'metric',
                    city: city ?? 'miami'
                }
            }
            
            dispatch(setConfig(config))
            
        } catch (error) {

            console.log(error);

            const config = {
                isSetUp: true,
                country: 'US',
                language: navigator.languages[1],
                openwConfig: {
                    units: 'metric',
                    city: 'Miami'
                }
            }

            dispatch(setConfig(config))
        } 
    }
}