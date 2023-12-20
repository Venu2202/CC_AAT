import React from 'react';
import Styles from '../App.module.css';

function FlexHeading() {
    return (
        <div className={Styles.rootFlexHeading}>
            <div className={Styles.pageHeading}>Flexbox-Guide</div>
            
            <div className={Styles.pageDescription}>A Guide for the concept of <a className={Styles.link} href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank" rel="noreferrer">Flexbox</a> and responsive design. Set the attributes as needed and copy the CSS code.</div>
            <div className={Styles.pageDescription}>CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension.</div>
            <div className={Styles.pageDescription}> <span className="material-icons" style={{ fontSize: "14px", margin: "0px -2px", verticalAlign: "-2px", color: "#ffa500" }}></span> <a className={Styles.link} href="https://twitter.com" target="_blank" rel="noreferrer"></a> </div>
 
        </div >
    );
}

export default FlexHeading;
