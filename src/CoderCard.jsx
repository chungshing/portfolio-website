import { useEffect, useState } from 'react'
import coderImg from './assets/coder.png'

const DRINKS = ['latte', 'mocha', 'cortado', 'espresso', 'cold brew']

export default function CoderCard() {
  const [drink, setDrink] = useState(DRINKS[0])

  useEffect(() => {
    const id = setInterval(() => {
      setDrink((d) => DRINKS[(DRINKS.indexOf(d) + 1) % DRINKS.length])
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="coder-card">
      <p className="coder-card-title mono">
        menu — <span className="coder-card-drink">{drink}</span>
      </p>
      <img src={coderImg} alt="Illustration of a developer coding at a desk" className="coder-card-img" />
      <p className="coder-card-caption">plan. code. repeat.</p>
      <p className="coder-card-caption coder-card-caption--sub">building software one cup at a time.</p>
    </div>
  )
}
