import axios from "axios";
export const getWeather = async (city,apiKey) => {
    try {
        if (!city) {
            if (!localStorage.getItem('city')) {
                localStorage.setItem('city', "Paris");
            }
        } else {
            localStorage.setItem('city', city);
        }
        
        city = localStorage.getItem('city')
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const { data, status } = await axios.get(url);
        if (status !== 200) {
            throw new Error("Une erreur est survenue !");
        } else {
            return data;
        }
    } catch (e){
        return {error:true,msg:e}
    }
}