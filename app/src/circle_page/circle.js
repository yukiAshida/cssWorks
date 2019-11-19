import React,{Component} from 'react'
import {UiButton} from '../../ui/button/button'
import './circle.css'

class Circle extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    // 戻るページ
    back(e){
        this.props.goToPage(e, "root");
    }

    render(){
        
        return(
            <div id="rotate_page" className="flex-column-center">

                <div className="mycard">
                    <UiButton value = "戻る" onClick={(e)=>this.back(e)}/>
                </div>

                <div className="content">
                    <div id="ui">
                        <div className="rotate">
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                            <div className="rotate_ball">
                            <div className="inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Circle;