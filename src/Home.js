import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Home.css';
import Newpost from './Newpost';



const Home = () => {

    

 
    const [posts, setPosts] = useState([])
    const getLatestPosts = () => {
        axios.post(`https://akademia108.pl/api/social-app/post/latest`)
        .then((res) => {
           // console.log(res.data);

            setPosts(res.data);
            
        })
    }
    useEffect(()=>{
       
    
        getLatestPosts()
        
       
    }, []); 

    let postElements = posts.map(function(item){
        return <div className='post'><div className='user'>Uzytkownik<br></br><img src='https://akademia108.pl/api/social-app/img/avatar1.png'></img>{item.user.username}</div><div className='date'>Data</div>{item.created_at}<div className='text'>Tresc posta<br></br>{item.content}</div><div>Liczba polubien<br></br>{item.likes.length}</div></div>
         
              
               
    })
    
    //console.log(postElements);
    return(
        <div>{postElements}<button onClick={()=> <Newpost></Newpost>}>Pobierz wiecej</button></div>
        
    );

  
    
}







export default Home;