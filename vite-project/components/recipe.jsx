function recipe(name,description,imageUrl){
    return <li>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <img src={imageUrl}/>
    </li>
}
export default recipe