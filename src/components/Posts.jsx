import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";
import React from 'react'


const Posts = () => {
    const [posts, loading, error, axiosFetch] = useAxiosFunction();

    useEffect (() => {
        // to get the data from the endpoint
        axiosFetch ({
            axiosInstance: axios,
            method: "GET",
            url: "/posts",
        })
    }, [])

    const handleSubmit = () => {
        axiosFetch ({
            axiosInstance: axios,
            method: "post",
            url: "/posts",
            requestConfig: {
                data: {
                    userId: 10,
                    title: "Kennymas",
                    body: "brother oni chicken...",
                },
            },
        })
    }

  return <article>
            <h2>Posts</h2>

            <div className="row">
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {loading && <p>loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && posts?.length && 
                <ul>
                    {posts.map((post, i) => (
                            <li key={i}>{post.id}. {post.title}</li>
                        ))}
                </ul> 
            }
            {!loading && !error && posts?.length && posts?.data && (
                <p>userId:{posts.data?.userId}, title {}</p>
            )}
            {!loading && !error && !posts && <p>No Post To Display! 🙂</p>}

         </article>
}

export default Posts