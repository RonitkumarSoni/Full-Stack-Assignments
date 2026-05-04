import React, {useState} from 'react';

function App(){
  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(0);

  const handeLike = () =>{
    if(liked){
      setLiked(false);
      setLikes(likes - 1);
    }
    else{
      setLiked(true);
      setLikes(likes + 1);
    }
  }
  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Like Button</h1>

      <button onClick={handeLike}>{liked ? "Liked": "Like"}</button>

      <p>Total Likes:{likes} </p>
    </div>
  )
}

export default App;

