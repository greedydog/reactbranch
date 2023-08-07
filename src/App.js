
import react, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
    const [data, setData] = useState({});
     const url = "http://127.0.0.1:5021/news_list";

      axios.defaults.withCredentials = true;
  

useEffect(async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts");
  setPosts(posts.data);
}, []);




     const getAxiosData = async () => {  
      
      
      axios.get(url)
      .then(function(data){
         
         displayJSONData(data)
          console.log(data)
      })
      
      .catch(function(e) {
          console.log(e);
      })
      // setData(await data.json())
    }
    
    function displayJSONData(data) {
      
      for (let i=0;i<data.length; i++)
          {
              if (data[i]['prediction'] === 1){
                  const li = document.createElement("li");
                  li.setAttribute('id', i);
                  const textNode = document.createTextNode(JSON.stringify(data[i]['article']));
                  li.appendChild(textNode);
                  document.getElementById('fruits').appendChild(li)
              }
          }
      console.log(data)

  }


  
  return (
    <div>
      <div id="fruits"></div>
    </div>
  )
    
}

export default App;
