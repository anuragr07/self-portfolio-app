import React from 'react';
import './HeadingLevel3.scss';

export default function HeadingLevel3(props){
    return(
            <div className="heading-3">
                <h3>{props.name}</h3>
            </div>
    );
}