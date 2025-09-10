import React, {useState} from 'react';
import "./Sidebar.css";

const Sidebar =()=>{
    const [togle, setTogle]= useState(true);
   
    const toggle = (e) => {
        setTogle(!togle); 
        console.log(togle);
      };
    

    return(
        <>
       <div className="nav__toggle" onClick={toggle}>
                <i className="icon-menu"></i>
            </div>
      <aside className={ togle ? "aside" : "hiddenaside"} >
      
            <nav className="nav">
                <div className="nav__menu">
                   <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="icon-user-following"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="icon-graduation"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="icon-note"></i>
                        </a>
                    </li>
                   </ul>
                </div>
            </nav>
        <div className="nav__footer">
            <span className="copyright">&copy; 2024</span>
        </div>
            </aside>
           </>
    )
}
export default Sidebar;
