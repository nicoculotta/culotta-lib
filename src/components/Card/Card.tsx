import React from 'react'
import './Card.scss'
import Heading from '../Heading'

export interface CardProps {
  imageUrl: string
  name: string
  onClick: () => void
  variant: 'purple' | 'yellow' | 'white'
}

const Card = ({ imageUrl, name, onClick, variant = 'purple' }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        className={`card__image card__image--${variant}`}
        src={imageUrl}
        alt={name}
      />
      <Heading as="h2" size="xs" className="card__name" textAlign="center">
        {name}
      </Heading>
    </div>
  )
}

export default Card
