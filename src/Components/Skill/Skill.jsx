import React, { useState, useRef, useEffect } from 'react';
import { FaAngleUp, FaAngleDown, FaCaretUp } from 'react-icons/fa';


let newStyle

// let oldStyle




function Skill({ id, icon, techology, exeperience, techno }) {


    const [showUp, setShowUp] = useState(false);

    
    return (
        <section>

            <div className='main-skill-section' key={id}>
                <div className="show-section">
                    <span>{icon}</span>
                    <div className="tech-info-description">
                        <h4 className="main-tech">{techology}</h4>
                        <p className='tech-info-para'>{exeperience}</p>
                    </div>

                    <button className="skill-btn" onClick={() => setShowUp(!showUp)}>
                        {
                            showUp ? < FaAngleDown /> : <FaAngleUp />
                        }
                    </button>
                </div>

                {/* INTERNAL MAP FUNCTION STARS FROM HERE */}
                <div className="wraping-hiding-section">

                    {
                        showUp && 
                        <div className='showing-tech-detail'>

                            {
                                techno.map((items) => {
                                    const { id, lang, perc } = items;                            
                                    newStyle={ 
                                        width:`${perc}`
                                    }
                                  
                                    return (
                                        <div className="tech-name" key={id}>
                                            <div className="skill-tech-info" >
                                                <h5>{lang}</h5>
                                                <h6 className="perc">{perc}</h6>
                                            </div>
                                            <div className="percentage-bar" style={newStyle}>

                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>

                    }
                </div>
            </div>

        </section>
    )
}

export default Skill;