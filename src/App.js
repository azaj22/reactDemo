import React from 'react';  
    
import axios from 'axios';

    
export default class PostList extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(` https://assessment.api.vweb.app/orders `)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div className='App'>  
        <h1> Edvora. </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th> Product  id</th>  
                  <th>quantity</th>  
                  <th>User id </th>  
                  <th>Order data</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.order_id}</td>  
                  <td>{post.product_id}</td>  
                  <td>{post.quantity}</td> 
                  <td>{post.user_id}</td>  
                  <td>{post.order_date}</td>  
                  <td>  
                {   /* <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>*/}
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  