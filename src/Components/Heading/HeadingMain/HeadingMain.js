import React from 'react';
import './HeadingMain.scss';

export default function HeadingMain(props){
    return(

            <div className="heading-1">
                <h1>{props.name}</h1>
            </div>
    );
}