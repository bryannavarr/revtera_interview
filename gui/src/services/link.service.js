import axios from "axios";

const headers = {};

const baseUrl = `http://localhost:8080/api/links`;

export function readAll() {
    const config = {
        method: "GET",
        headers
    };

    return axios(baseUrl, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler);
}


const responseSuccessHandler = response => {
    return response.data;
};

const responseErrorHandler = error => {
    console.log(error);
    return Promise.reject(error);
};