import axios from 'axios';
const baseUrl = "http://ops.xmrtc.com/api/"
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