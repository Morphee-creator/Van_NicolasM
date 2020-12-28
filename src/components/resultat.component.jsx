import React from 'react'
import './styles/resultat.styles.css'

export const Resultat = ({props}) => {
    const tab = props
    let resultat = 0
    let convert


    if(tab.length > 0) {
        for(let i =0; i < tab.length; i++) 
            {
                convert = parseInt(tab[i].km, 20)
                resultat += convert
            }
    }

    return(
        <div className='resultat'>
            <h2>Distance totale: {resultat} km </h2>
        </div>
    )
}