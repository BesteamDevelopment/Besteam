import axios from "axios";

const axiosInstance = () => {

    const environment = process.env.REACT_APP_NODE_ENV;
    return axios.create({
        baseURL:
            environment === "production"
                ? "https://fantavol3ley-be.herokuapp.com/api/"
                : "https://fantavol3ley-be.herokuapp.com/api/",
        headers: {
            authorization: ''
        },
    });
};

export default axiosInstance;
