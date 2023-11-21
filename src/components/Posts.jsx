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
                data: {
                    userId: 1,
                    title: "Kennymas",
                    body: "brother oni chicken...",
                },
            },
        })
    }

  return <article>
            <h2>Posts</h2>

            {loading && <p>loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && joke && <p>{joke?.joke}</p>}
            {!loading && !error && !joke && <p>No Joke To Display! 🙂</p>}
            
         </article>
}

export default Posts