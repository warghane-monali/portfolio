import React from 'react';
import {collegeinfo} from './../../data';


function Education() {
    return (
        <section className='education'>
            {collegeinfo.map((items) => {
                const { id, course, college, year } = items;
                return (
                    <div className="main-edication" key={id}>                        
                            <h3 className="degree">{course}</h3>
                            <h5 className="college">{college}</h5>
                            <p className="year">{year}</p>
                   
                    </div>
                )
            })}

        </section>
    )
}

export default Education;
