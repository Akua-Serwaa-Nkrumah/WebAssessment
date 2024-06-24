import React from 'react';
import { useEffect, useState,} from "react";
import axios from "axios";

const Jokes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make the GET request to the API endpoint
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?amount=20');
        console.log(response.data.jokes);
        // Set the response data (the posts) to the state
        setPosts(response.data.jokes);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching posts:', error);
      }
    };

    // Fetch posts when the component mounts
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li>{post.delivery}</li>
        ))}
      </ul>
    </div>
  )
}

export default Jokes
