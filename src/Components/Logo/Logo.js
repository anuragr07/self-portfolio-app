import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './Logo.scss'


export default function Logo(){
    return(
        <div className="logo">
            <FontAwesomeIcon icon={faCode} />
            ANURAGR07
        </div>
    )
}