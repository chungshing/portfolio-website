import { useEffect, useState } from 'react';

const DRINKS = ['Espresso', 'Cortado', 'Flat White', 'Latte', 'Cappuccino', 'Mocha'];

export default function CoderCard() {
    const [drinkIndex, setDrinkIndex] = useState(() => Math.floor(Math.random() * DRINKS.length));
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            // Fade out
            setFade(false);

            setTimeout(() => {
                setDrinkIndex((current) => {
                    let next;

                    do {
                        next = Math.floor(Math.random() * DRINKS.length);
                    } while (next === current);

                    return next;
                });

                // Fade back in
                setFade(true);
            }, 200);
        }, 5500);

        return () => clearInterval(id);
    }, []);

    return (
        <div className='coder-card'>
            <p className='coder-card-label mono'>☕ Today's Special</p>

            <h3 className={`coder-card-drink mono ${fade ? 'visible' : 'hidden'}`}>
                {DRINKS[drinkIndex]}
            </h3>

            <img
                src='https://raw.githubusercontent.com/chungshing/portfolio-assets/main/image/coder.png'
                alt='Illustration of a developer coding at a desk'
                className='coder-card-img'
            />

            <p className='coder-card-caption'>plan. code. repeat.</p>
        </div>
    );
}
