import React, { useState } from 'react';
import Display from './Display';

interface Cocktail {
    name: string;
    ingredients: string[];
    instructions: string;
}

const Generator: React.FC = () => {
    const [currentCocktail, setCurrentCocktail] = useState<Cocktail | null>(null);
//https://stackoverflow.com/questions/59988667/typescript-react-fcprops-confusion
    const generateRandomCocktail = () => {
        const randomIndex = Math.floor(Math.random() * cocktails.length);
        setCurrentCocktail(cocktails[randomIndex]);
    };

    return (
        <div className="generator">
            <h2>Generate Cocktail</h2>
            <button onClick={generateRandomCocktail}>Generate</button>
            {currentCocktail && <Display cocktail={currentCocktail} />}
        </div>
    );
};

export default Generator;
