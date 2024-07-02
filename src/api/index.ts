import axios from "axios"

const getPlacesData = () => {
    return axios.get('')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}