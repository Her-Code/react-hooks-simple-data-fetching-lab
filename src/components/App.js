// create your App component here
import React,{ useEffect ,useState } from "react";

function App() {
    const[dogImage,setDogImage]=useState(null);
    const [ loading,setLoading]=useState(true);


useEffect(()=>{
    async function fetchDogImage(){
        try {
            const response =await fetch ('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogImage(data.message);
            setLoading(false);
        } catch(error) {
            console.error("Error fetching dog image:",error);
            setLoading(false);
        };
    }
  fetchDogImage();


},[]);

let content;

if (loading) {
    content=<p>loading...</p>;
} else  {
    content =<img src={dogImage} alt="A Random Dog"></img>;
}

return(
    <div>{content}</div>
);
}

export default App;



