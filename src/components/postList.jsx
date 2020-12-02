import React, {Component} from 'react'
import Post from './post'
import axios from 'axios'


export default class PostList extends Component{
constructor(props){
    super(props);
    this.state = {posts: []};
}
2
componentDidMount(){
    console.log("getting data");
    axios.get('http://localhost:5000/posts/')
    .then(response =>{
        this.setState({posts: response.data})
    })
    .catch((error)=>{
        console.log(error);
    })
}

postList(){
    this.state.posts.reverse();
    return this.state.posts.map(currentPost =>{
        return <Post status= {currentPost.status} />
    })
}
render(){
    return(
        <section>
            <div className="postList">
                {this.postList()}
            </div>
        
        </section>
    )
}
}