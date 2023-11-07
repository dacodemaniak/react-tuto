import axios from "axios"

const PersonService = {
    _apiUri: 'http://localhost:3000/',

    fetchPerson: async () => {
        const response = await axios.get(`${PersonService._apiUri}persons`)
        return response.data
    }
}

export const fetchPerson =  PersonService.fetchPerson