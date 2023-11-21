import { useState, useEffect } from "react";

const useAxiosFunction = () => {
    // const { axiosInstance, method, url, requestConfig = {} } = configObj;

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState();

    

    useEffect(() => {
        let isMounted = true;
        // const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    // signal: controller.signal
                })
                console.log(res);
                isMounted && setResponse(res.data)

            } catch (err) {
                console.log(err);
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();

        return () => {
            isMounted = false
            // controller.abort()
        };

    }, [reload])

    return [ response, loading, error, refetch ]
};


export default useAxiosFunction