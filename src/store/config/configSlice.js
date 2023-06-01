import { createSlice } from '@reduxjs/toolkit'

const defaultOpwConfig = {
    units: 'metric',
    city: 'USA'
}

export const configSlice = createSlice({
    name: 'config',
    initialState: () => {

        const { 
            isSetUp,
            country,
            language,
            openwConfig,
            selectedCategory 
        } = JSON.parse(localStorage.getItem('config') ?? '{}')

        

        return {
            isSetUp: isSetUp ?? false,
            country: country ?? null,
            language: language ?? navigator.languages[1],
            selectedCategory: selectedCategory ?? 0,
            openwConfig: openwConfig ?? defaultOpwConfig
        }
    },
    reducers: {
        switchCategory: (state, action) => {
            state.selectedCategory = action.payload
        },

        setConfig: (state, action) => {
            
            const { isSetUp, country, language, openwConfig, selectedCategory } = action.payload

            state.selectedCategory = selectedCategory
            state.openwConfig = openwConfig
            state.isSetUp = isSetUp
            state.country = country
            state.language = language

            localStorage.setItem('config', JSON.stringify(action.payload))
        }
    }
});

export const { switchCategory, setConfig } = configSlice.actions;