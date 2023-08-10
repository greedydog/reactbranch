
import React, { useState, useEffect } from 'react';
import axios from 'axios'


//     const [data, setData] = useState({});

//       axios.defaults.withCredentials = true;
  
// const getData = async () => {
//   const data = await axios.get(
//     "http://127.0.0.1:5021/news_list"
//   );
//   setData(data);
// };

// useEffect(() => {
//   getData(data);
//   displayJSONData(data)
// }, [data]);

// console.log(data)
// const url = "http://127.0.0.1:5021/news_list"
//      const getAxiosData = async () => {  
      
      
//       axios.get(url)
//       .then(function(data){
         
//         //  displayJSONData(data)
//           console.log(data)
//       })
      
//       .catch(function(e) {
//           console.log(e);
//       })
//       // setData(await data.json())
//     }
    

// getAxiosData()




  //   function displayJSONData(data) {
      
  //     for (let i=0;i<data.length; i++)
  //         {
  //             if (data[i]['prediction'] === 1){
  //                 const li = document.createElement("li");
  //                 li.setAttribute('id', i);
  //                 const textNode = document.createTextNode(JSON.stringify(data[i]['article']));
  //                 li.appendChild(textNode);
  //                 document.getElementById('fruits').appendChild(li)
  //             }
  //         }
  //     console.log(data)

  // }


  

    
// }


export const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5021/news_list");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // 오류 처리: 사용자에게 오류 메시지를 보여줄 수 있음
      }
    };
    
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        item.prediction === 1 ? (
          <li key={item.id}>
            {item.content}
          </li>
        ) : null
      ))}
    </ul>
  );
};



export default App;
