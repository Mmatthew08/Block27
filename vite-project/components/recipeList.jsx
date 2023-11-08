import{useState,useEffect} from 'react'
import recipe from './recipe'
let API_URL="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/"


function recipeList(){
    const[ recipe,setRecipe]=useState([])
    useEffect(()=>{
        async function fetchRecipe(){
            let response = await fetch (`$(API_URL)/recipe`)
            let json= await response.json()
          
            console.log(json)
            setRecipe(json.data)
        }
        fetchRecipe() 
    },[])
    console.log(recipe)
    
    return <ul className='recipe-list'>
    {recipe.map(r=>
         <recipe key={r.id}
          name={r.name} 
          description={r.description} 
          imageURL={r.imageURL}/>)
    }
    </ul> 
    }
    export default recipeList
