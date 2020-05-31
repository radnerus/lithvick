import React from 'react'
import '../style/heart.module.scss';

const Heart = (props) => {
    const style = {
        left: props.left + 'vw',
        animationDuration: `${Math.floor(Math.random() * 7 + 3)}s`
    };
    return (
        <div className="heart" {...props} style={style}></div>
    )
}

export default Heart
