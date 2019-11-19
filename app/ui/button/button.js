import React, {Component} from 'react';
import './button.css';

export const UiButton = (props)=>{
    var W = props.width || "150px";
    var H = props.height || "50px";
    var F = props.fontsize || "20px";
    var M = props.margin || "20px";

    return (
        <a href="#!" className="ui-button" onClick={props.onClick} style={{width:W ,height:H, lineHeight:H, fontSize:F, margin:M}}>
            {props.value}
        </a>
    );
}