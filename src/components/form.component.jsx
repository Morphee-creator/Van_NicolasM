import React from 'react'
import './styles/form.styles.css'

export const Form = ({handleChange, handleSubmit, destination}) => {
    
    return (
        <form method='post'>
            <label>Destination: </label>
            <input type='text' id='destination' name='name' placeholder='Choix de la destination' onChange={handleChange} />
            
            <label>Distance (Km): </label>
            <input type='number' id='km' name='km' placeholder='Nombre de km' onChange={handleChange} />
            <button type='submit' className="myButton" onClick={handleSubmit}>Ajouter</button>
        </form>
    )
}