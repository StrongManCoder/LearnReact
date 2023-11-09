/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-06 16:52:35
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-08 15:19:05
 * @FilePath: /project/src/Project/Son.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Son extends Component {
 
  // static contextType = ContextObj;
 
  constructor(props){
    super(props);

    this.state = {
      name:'大儿砸',
      age:3
    }
  
    this.changeConText = this.changeConText.bind(this);
  }

  render() {
    return (
      <div>
        <h2>我是son组件 </h2>
        <h3>接受到{this.props.money}元钱</h3>
        {/* <span>{this.props.wealth[0]}</span>
        <span>{this.props.wealth[1]}</span>
        <span>{this.props.wealth[2]}</span> */}

        <hr/>
<button onClick={this.changeConText}>点我修改全局context啊 </button>


      <hr/>

      </div>
    )
  }

  changeConText(){

    // <ContextObj.Provider value={this.state}>

      
    // </ContextObj.Provider>
    

  }



}




//参数校验 prop-types
Son.protoType = {
  money:PropTypes.number.isRequired,
  wealth:PropTypes.array
};

Son.defaultsProps = {
  money:1000,
  wealth:['身体']
}