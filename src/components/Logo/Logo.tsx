import React from 'react'
import './Logo.scss'
import Heading from '../Heading'

export interface LogoProps {
  onClick?: () => void
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <div className="logo" onClick={onClick}>
      <img className="logo__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Logo" />
      <Heading size="s" as="h4" className="logo__text">Pokédex</Heading>
    </div>
  )
}

export default Logo