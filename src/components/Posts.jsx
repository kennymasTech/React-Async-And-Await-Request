import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";


import React from 'react'

const Posts = () => {
    const [response, loading, error, axiosFetch] = useAxiosFunction();

    useEffect (() => {
        // to get the data from the endpoint
        axiosFetch ({
            axiosInstance: axios,
            method: "/posts",
            url: "GET",
        })
    }, [])

    const handleSubmit = () => {
        axiosFetch ({
            axiosInstance: axios,
            method: "/posts",
            url: "posts",
            requestConfig: {
                
            }
        })
    }

  return <div>Posts</div>
}

export default Posts