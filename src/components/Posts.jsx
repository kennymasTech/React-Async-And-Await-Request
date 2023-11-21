
import { useEffect } from "react";
import axios from "../apis/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
   const [posts, loading, error, axiosFetch] = useAxiosFunction();
   const getData = () => {
      axiosFetch({
         axiosInstance: axios,
         url: "/posts",
         method: "GET",
      });
   };

   useEffect(() => {
    // to get the data from the endpoint
      getData();
   }, []);

   const handleSubmit = () => {
      axiosFetch({
         axiosInstance: axios,
         url: "/posts",
         method: "POST",
         requestConfig: {
            data: {
               userId: 10,
               title: "Kennymas",
               body: "Holla at your boy...",
            },
         },
      });
   };

   return (
      <article>
         <h2>Posts</h2>
         <div className="row">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleSubmit}>Re-request</button>
         </div>

         {loading && <p>Loading...</p>}
         {!loading && error && <p className="errMsg">{error}</p>}
         {!loading && !error && posts?.length && (
            <ul>
                {
                    posts.map((post, i) => (
                        <li key={i}>{post.id}. {post.title}</li>
                    ))
                }
            </ul>
         )}
         {!loading && !error && posts?.data && 
            <p>
                userId: {posts.data?.userId},  title: {posts.data?.title}, body: {posts.data?.body}
            </p>
         }
         {!loading && !error && !posts && <p>No Post to Display! 😞</p>}

      </article>
   );
};

export default Posts;




// import axios from "../apis/jsonPH";
// import useAxiosFunction from "../hooks/useAxiosFunction";
// import { useEffect } from "react";
// import React from 'react'


// const Posts = () => {
//     const [posts, loading, error, axiosFetch] = useAxiosFunction();

//     useEffect (() => {
//         // to get the data from the endpoint
//         axiosFetch ({
//             axiosInstance: axios,
//             method: "GET",
//             url: "/posts",
//         })
//     }, [])

//     const handleSubmit = () => {
//         axiosFetch ({
//             axiosInstance: axios,
//             method: "post",
//             url: "/posts",
//             requestConfig: {
//                 data: {
//                     userId: 10,
//                     title: "Kennymas",
//                     body: "brother oni chicken...",
//                 },
//             },
//         })
//     }

//   return <article>
//             <h2>Posts</h2>

//             <div className="row">
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>

//             {loading && <p>loading...</p>}
//             {!loading && error && <p className="errMsg">{error}</p>}
//             {!loading && !error && posts?.length && 
//                 <ul>
//                     {posts.map((post, i) => (
//                             <li key={i}>{post.id}. {post.title}</li>
//                         ))}
//                 </ul> 
//             }
//             {!loading && !error && posts?.length && posts?.data && (
//                 <p>userId:{posts.data?.userId}, title: {posts.data?.title}, body: {posts.data?.body}</p>
//             )}
//             {!loading && !error && !posts && <p>No Post To Display! 🙂</p>}

//          </article>
// }

// export default Posts