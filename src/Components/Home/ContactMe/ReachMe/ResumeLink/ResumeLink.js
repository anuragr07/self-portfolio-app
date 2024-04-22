import React from "react";
import HeadingLevel3 from "../../../../Heading/HeadingLevel3/HeadingLevel3";
import "./ResumeLink.scss"
import pdf from './Resume.pdf'

export default function ResumeLink() {
      
    return (
        <>
            <HeadingLevel3 name="Download my Resume"></HeadingLevel3>
            <a href={pdf} download="Resume_Anurag_Rawal.pdf" className="download-button">Download</a>
        </>
    )
}