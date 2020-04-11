import React, {Component} from 'react';
import style from './style.css';

export default class Button extends Component{
    render() {
        const {value, onClick} = this.props;
        return (
            <button className={style.button} onClick={onClick}>{value}</button>
        );
    }
}


