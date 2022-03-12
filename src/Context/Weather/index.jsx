import { createContext, useReducer} from "react";
import { type } from "../weather.js";


const initialState = {
    weather: {},
    apiKey: '2b489317a14641c304d13adc86e2704f',
    city: '',
    show: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case type.getWeather: {
            const weather = action.payload;
            return {
                ...state,
                weather
            };
        }

        case type.show: {
            const show = action.payload;
            return {
                ...state,
                show
            };
        }
        default: return state;
    }
}



export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const value = useReducer(reducer, initialState);

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}
