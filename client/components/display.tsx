interface Cocktail {
    name: string;
    ingredients: string[];
    instructions: string;
}

interface DisplayProps {
    cocktail: Cocktail;
}

const Display: React.FC<DisplayProps> = ({ cocktail }) => {
    return (
        <div className="display">
            <h3>{cocktail.name}</h3>
            <p>Ingredients: {cocktail.ingredients.join(', ')}</p>
            <p>Instructions: {cocktail.instructions}</p>
        </div>
    );
};

export default Display;
