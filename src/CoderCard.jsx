import { useEffect, useState } from 'react';
import coderImg from './assets/coder.png';

const DRINKS = ['Espresso', 'Cortado', 'Flat White', 'Latte', 'Cappuccino', 'Mocha'];

export default function CoderCard() {
    const [drinkIndex, setDrinkIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setDrinkIndex((i) => (i + 1) % DRINKS.length);
        }, 5500);

        return () => clearInterval(id);
    }, []);

    return (
        <div className='coder-card'>
            <p className='coder-card-label mono'>☕ Today's Special</p>

            <h3 className='coder-card-drink mono'>{DRINKS[drinkIndex]}</h3>

            <img
                src={coderImg}
                alt='Illustration of a developer coding at a desk'
                className='coder-card-img'
            />

            <p className='coder-card-caption'>plan. code. repeat.</p>
        </div>
    );
}
