function MyRecipesComponents({label, image, calories, ingredientLines
}) {
    return(
       <div>
        
            <div className="container">
                 
                
            <h2>{label}</h2>
            </div>

            <div className="container">
            <img  src={image} alt="dish"/>
            </div>

            <div className="container">
             <ul className="list">
                {ingredientLines.map((ingredient, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="icon_check" className="icon"/>{ingredient}</li>
                ))}
             </ul>
             </div>

            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>
        </div>
        
       
    )

}
export default MyRecipesComponents;
