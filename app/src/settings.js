import React,{Component} from 'react'
import Circle from './circle_page/circle'

export const pages = [
    {"page":"test", "name":"テスト", "component": function __component(goToPage){return <Circle goToPage = {(e, page)=>goToPage(e, page)}/>}}, 
];