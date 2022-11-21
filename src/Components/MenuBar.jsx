import React, { useState } from 'react';


function MenuBar({chengeMenu,menuBtn, id, icon, title, url}) {


    return (
        <> 
            {
                menuBtn && <>
                    < li key={id} onClick={chengeMenu} >
                        <a href={url} className='menu-center'>{icon} <span>{title}</span> </a>
                    </li>
                </>
            }
        </>


    )
}

export default MenuBar;