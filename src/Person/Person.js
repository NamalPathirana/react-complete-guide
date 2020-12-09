import React from 'react';
//import './Person.css'; 
import Radium from 'radium';
import Style from 'styled-components';

const person = (props) => {

    const StyledDev = Style.div`

    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px) {
        width: 450px;
    }

    `;

    // const style = {
    //     '@media (min-width:500px)':{
    //         width:'450px',
    //     }
    // }

    return (
//  <div className='Person' style={style}> 
    <StyledDev>
    <p onClick = {props.click} >I am a {props.name} and i am {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value = {props.name}></input>
    </StyledDev>
    );
}

export default person;