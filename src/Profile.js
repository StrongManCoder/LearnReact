/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-30 17:20:21
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-08 16:58:04
 * @FilePath: /project/src/Profile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import eventBus from './event'


export default class Profile extends Component {
  constructor(props){
   //super指的是父类的构造函数
    super(props);

    this.state = {};
  }
  
    render() {
        const {name} = this.props;
    return (
      <div>
        <h2>Profile</h2>

          <hr></hr>
        <h2>兄弟组件通信</h2>

        <button onClick={e=>this.emitter()}> Profile组件发送事件   Main组件接受 </button>

        <ul>
        {name.map((item) => {
          //保证key的唯一性 避免使用index作为key
            return <li key={item}>{item}</li>
        }
        )
            
        }
        </ul>
      </div>
    )
  }

  emitter(){
    const obj = {
      name:'嘎嘎嘎',
      age:16
    }
    const n = 123;

    eventBus.emit('sayHello',obj,n);
    // console.log(obj);

  }



}
