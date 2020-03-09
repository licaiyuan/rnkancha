import axios from 'axios';
const baseUrl = "/dl/"
// const baseUrl = "http://192.168.1.177:9898/"
const getqq = async (value, url) => {
    axios.get(baseUrl + url, {
        params: value
    })
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}
const postqq = async (value, url) => {
    axios.post(baseUrl + url, value)
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}
export { getqq, postqq }