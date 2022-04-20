import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Newpost.css';

const Newpost = () => {

    const [newest, setMore] = useState([])
    const getMorePosts = () => {
        axios.post(`https://akademia108.pl/api/social-app/post/older-then`)
        .then((more) => {

            
            setMore(more.inf);
            console.log(more.inf)
        });
    }
    useEffect(()=>{
       
    
        getMorePosts()
        
       
    }, []);

    let postExtra = newest.map(function(item){
        return <div className='post'><div className='user'>Uzytkownik<br></br><img src='https://akademia108.pl/api/social-app/img/avatar1.png'></img>{item.user.username}</div><div className='date'>Data</div>{item.created_at}<div className='text'>Tresc posta<br></br>{item.content}</div><div>Liczba polubien<br></br>{item.likes.length}</div></div>
         
              
               
    })
    
    //console.log(postElements);
    return(
        <div>{postExtra}<button>Pobierz wiecej</button></div>

    );

}

export default Newpost;