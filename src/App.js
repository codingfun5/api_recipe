import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponents from './MyRecipesComponent';

 //https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=80df3441&app_key=3f3128392b7dfd81a7002263084bbd8b

function App() {
const MY_ID = "80df3441";
const MY_KEY = "3f3128392b7dfd81a7002263084bbd8b";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const[worldSubmitted, setWorldSubmitted] = useState("avocado");

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${worldSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [worldSubmitted])
const myRecipeSearch = (e) => {
console.log(e.target.value)
setMySearch(e.target.value)
}
const finalSearch = (e) => {
  e.preventDefault()
  setWorldSubmitted(mySearch)
}
 return(
    <div className='App'>

     <div className='container'>
      <video autoPlay muted loop>
        <source  src = {video} type = "video/mp4"/>
      </video>  
      <h1>Find a Recipe</h1>
     </div>

     <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
     </div>

     <div className='container'>
      <button onClick={finalSearch} className='button'>
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" />
      </button>
      </div>
      
{myRecipes.map((element, index) => (
  <MyRecipesComponents key={index}
    label={element.recipe.label}
    image={element.recipe.image}
    ingredientLines={element.recipe.ingredientLines}
    calories={element.recipe.calories} />
))}
    </div>
  )
 } 
export default App;
