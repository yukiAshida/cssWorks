import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './global_style/index.css'
import {UiButton} from '../ui/button/button'
import {pages} from './settings'

class Index extends Component{

    constructor(props){
        super(props);
        this.state = {
            "page":"root",            
        };
    }

    // トップレベルのページ遷移・データ伝達関数
    goToPage(e, page){
        var new_state = Object.assign({},this.state);
        new_state["page"] = page;
        this.setState(new_state);
    }

    render(){



        return(
            <div id="index">

                {/* ボタンの配置 */}
                {this.state["page"]=="root" && <div className = "mycard">
                    {pages.map( (v,i)=>{return <UiButton value={v["name"]} onClick={(e)=>this.goToPage(e, v["page"])} key={i}/>} )}
                </div>}
                
                {/* 各ページ */}             
                {pages.map( (v,i)=>{return this.state["page"]!=v["page"]?<div style={{display:"none"}} key/>:v["component"]((e,page)=>this.goToPage(e,page))} )}
            </div>
        );
    }
}


ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);