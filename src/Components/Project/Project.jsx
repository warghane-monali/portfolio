import React, { useState } from 'react';
import { projects } from './../../data';

import {FaLink} from 'react-icons/fa';


function Project() {



    return (
        <section className='project-section'>
            <div className="main-project">

                {projects.map((items) => {
                    const { id, title, img, link } = items
                    return (
                        <div className="project" key={id}>

                            <img src={img} alt={title} className='project-img' />

                            <div className="project-data">
                                <a href={link}><FaLink/></a>
                                <span>{title}</span>
                            </div>
                        
                        </div>
                    )
                })

                }

            </div>


        </section>
    )
}

export default Project;

