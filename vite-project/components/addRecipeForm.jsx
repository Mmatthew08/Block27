function addRecipeForm(){
    const[name,setName]= useState('')
    const [Description,setDescription]=useState('')
    const [ImageURL,setImageURL]= useState('')
    
    function handleSubmit(event){
        event.preventDefault()
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input type="text"/>
        <label>Description</label>
        <input type="text"/>
        <label>ImageURL</label>
        <input type="text" />
        <button type="submit">Add Recipe</button>

    </form>
}
