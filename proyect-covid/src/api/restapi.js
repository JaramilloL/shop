import axios from 'axios'

const baseUrl = axios.create({
    baseURL: "https://disease.sh/v3/covid-19/"
})

const history = "historical/all?lastdays=all"
const worldwide = "all"
const countries = "countries/mexico"
//const map = "vaccine/coverage/countries?lastdays=1"

export const getHistory = async() => {
    const response = await baseUrl.get(history)
    console.log(response.data)
    return response.data;
}
export const getWorldwide = async() => {
    const response = await baseUrl.get(worldwide)
    return response.data;
}
export const getCountries = async() => {
    const response = await baseUrl.get(`${countries}`)
    const data = await response.data
    return data;
}
