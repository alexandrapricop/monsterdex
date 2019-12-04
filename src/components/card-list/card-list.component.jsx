import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = ({monsters, searchInput}) => {
    return(
    <div className='card-list'>
            {
            monsters.map(
            monster => { 
            if(monster.username.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
              return <Card key={monster.id} monster={monster}/>}
            )
          }
    </div>
    );
};