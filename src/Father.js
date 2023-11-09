/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-06 16:52:49
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-06 17:56:41
 * @FilePath: /project/src/Father.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Son from './Son'

export default class Father extends Component {
  render() {
    
    const gfconst = {name:'哇咔咔',age:23};

    return (
      <div>
        <h2>我是father组件</h2>
        <Son money={10000} wealth={['知识','健康','品德']} {...gfconst} />
        
        <Son />

      </div>
    )
  }
}


