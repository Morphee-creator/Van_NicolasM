import React from 'react'
import './styles/list.styles.css'

export const List = ({props}) => {
    const tab = props

    return (
        <div className='liste'>
          <h2>Liste des lieux</h2>
          <ul>

            {tab.map((tab, index) => (
              <li key={index}>
                {tab.name} - {tab.km} km
              </li>
            ))}
            
          </ul>
        </div>
    )
}