/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-30 17:09:05
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-08 16:58:06
 * @FilePath: /project/src/Footer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 */
import React, { Component } from 'react'
import eventBus from './event'

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  
  
  
    render() {
        const {name}= this.props;
    return (
      <div>
        <h3>我是Footer组件</h3>
        <h3>{name}</h3>
      </div>
    )
  }
}
