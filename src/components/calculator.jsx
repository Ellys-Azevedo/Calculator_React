import React from 'react'
import './calculator.css'
import Container from '@mui/material/Container';

export default function Calculator(){
    return(
        <Container maxWidth='xs'>
        <div className='box'>
            <button></button>
            <button></button>
            <button></button>
            <button>/</button>
            <button></button>
            <button></button>
            <button></button>
            <button>x</button>
            <button></button>
            <button></button>
            <button>4</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>0</button>
            <button></button>
            <button>,</button>
            <button>=</button>
        </div>
        </Container>
    )
} 