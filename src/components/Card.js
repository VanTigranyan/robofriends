import React from 'react';

const Card = ({name,email,id}) => {
    return (
        <div 
        className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img src={`https://robohash.org/${name}?150x150"`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;