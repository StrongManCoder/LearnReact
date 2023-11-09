/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-25 14:26:15
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-09 15:01:12
 * @FilePath: /project/src/Main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import eventBus from './event'
import React, { Component } from 'react'

export default class Main extends Component {
  
  constructor(props){
    //super指的是父类的构造函数
     super(props);
 
   }

   //添加事件监听  监听sayHello事件
   componentDidMount() {
    eventBus.addListener('sayHello',this.handleSayHelloListener);
   }
   //处理事件的监听
   handleSayHelloListener(obj,n){
    console.log(`Main组件输出  ${obj.name},${n}`);
   }

   //移除事件监听
   componentWillUnmount(){
    eventBus.removeListener('sayHello',this.handleSayHelloListener);
   }

  render() {
    return (
      <div>
          <h1>props传值相关</h1>
      <h3>姓名:{this.props.name}</h3>
      <h3>年龄:{this.props.age}</h3>
      <h3>身高:{this.props.height}</h3>
      </div>
    )
  }
}

