import { setUpConfig } from "./configSlice"

export const startConfig = () => {
    
    return async (dispatch) => {

        try {

            const { countryCode, city } = await fetch('http://ip-api.com/json').then(res => res.json())

            await new Promise(resolve => setTimeout(resolve, 5000))

            const config = {
                isSetUp: true,
                country: countryCode,
                language: navigator.languages[1],
                selectedCategory: 0,
                openwConfig: {
                    units: 'metric',
                    city
                }
            }
            
            dispatch(setUpConfig(config))
            
        } catch (error) {

            console.log(error);

            const config = {
                isSetUp: true,
                country: 'US',
                city: 'Miami',
                language: navigator.languages[1],
                selectedCategory: 0,
                openwConfig: {
                    units: 'metric',
                    city: 'Miami'
                }
            }

            dispatch(setUpConfig(config))
        } 
    }
}