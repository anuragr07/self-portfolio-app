import React from "react";
import "./style.scss";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Home(){
    return(
        <div>
            <Jumbotron fluid>
                <div className="banner-img">
                    <div className="banner-text">
                        <h2>Hi, I am</h2>
                        <h1>Anurag Rawal</h1>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}