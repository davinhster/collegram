import React from 'react'
import PostList from './postList'
import post from './post';
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Feed(){

const [status,setStatus] = useState("");
const history = useHistory();

const handlePost = e =>{
    e.preventDefault();

   
        const post = {
            status: status
        }

        axios.post('http://localhost:5000/posts/add',post)
        .then(res => {console.log(res.data);
            history.go(0);
            })
        .catch(err => alert("Posts unable to be added"));
        console.log(post);
}
    return(
        <section>
            <form onSubmit ={handlePost} >
                <input type="text" onChange={e => setStatus(e.target.value)}></input>
                <button class="btn black waves-effect waves-light" type="submit" name="action"> Post
                        <i class="material-icons right"></i>
                    </button>
            </form>
            <PostList />
        </section>
    );
}


export default Feed;