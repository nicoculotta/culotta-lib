import React from 'react'
import './Table.scss'

export interface TableProps {
  headers: string[];
  data: any[][];
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row">
          {headers.map((header, index) => (
            <th key={index} className="table__header-cell">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="table__body-cell">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table