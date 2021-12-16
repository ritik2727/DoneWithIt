import { useState } from "react";

export default useApi = (apiFun) => {
const [data,setData] = useState([])
const [error,setError]  = useState(false);
const [loading,setLoading] = useState(false);

const request = async (...args) =>{
    setLoading(true)
    const response = await apiFun(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
};

return {data,error,loading,request}

}