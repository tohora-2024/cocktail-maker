
const Display = ({ cocktail }) => {
    return (
        <div className="display">
            <h3>{cocktail.name}</h3>
            <p>Ingredients: {cocktail.ingredients.join(', ')}</p>
            <p>Instructions: {cocktail.instructions}</p>
            <p>{cocktail.isAlcoholic ? 'Alcoholic' : 'Non-Alcoholic'}</p>
        </div>
    );
};

export default Display;
