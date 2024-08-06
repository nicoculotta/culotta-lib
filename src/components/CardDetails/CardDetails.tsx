import React from 'react'
import Table, { TableProps } from '../Table/Table'
import Heading from '../Heading'
import './cardDetails.scss'

export interface CardDetailsProps {
  name: string
  imageUrl: string
  types: string[]
  stats: TableProps
  weight?: number
  height?: number
}

const CardDetails = ({ name, imageUrl, types, stats, weight, height }: CardDetailsProps) => {
  return (
    <>
      <div className="card-details">
        <div className="card-details__header">
          <div className="card-details__image">
            <img src={imageUrl} alt={name} />
          </div>
          <div>
            <Heading as="h2" size="m">
              {name}
            </Heading>
            <div className="card-details__types">
              {types.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>
        </div>
        {weight && height && (
          <div className="card-details__weight-height">
            <div className="card-details__weight">
              <div className="card-details__label">Weight</div>
              <span>{weight}</span>
            </div>

            <div className="card-details__height">
              <div className="card-details__label">Height</div>
              <span>{height}</span>
            </div>
          </div>
        )}
        <div className="card-details__stats">
          <Table {...stats} />
        </div>

      </div>
    </>
  )
}

export default CardDetails