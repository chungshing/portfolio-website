import { useMemo } from 'react';
import './LofiBar.css';

const TRACKS = [
    'rainy afternoon lo-fi',
    'coffeehouse jazz',
    'late night debugging',
    'espresso & endpoints',
    'weekend side project',
    'midnight commits',
    'focus mode',
    'sunrise coding session',
];

const EQ = [1.05, 0.9, 1.25, 0.8, 1.15];

export default function LofiBar() {
    const track = useMemo(() => TRACKS[Math.floor(Math.random() * TRACKS.length)], []);

    return (
        <div className='lofi-bar' aria-hidden='true'>
            <div className='lofi-eq'>
                {EQ.map((duration, i) => (
                    <span
                        key={i}
                        style={{
                            animationDuration: `${duration}s`,
                            animationDelay: `${i * 0.14}s`,
                        }}
                    />
                ))}
            </div>

            <span className='mono lofi-text'>♪ now playing — {track}</span>

            <span className='mono lofi-text lofi-text--dim'>loop</span>
        </div>
    );
}
