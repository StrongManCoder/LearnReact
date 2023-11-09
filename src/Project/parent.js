/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-26 14:47:11
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-10-26 16:38:28
 * @FilePath: /project/src/Project/parent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component} from 'react';

import Sub from "./sub";

class Parent extends Component{
constructor(){
    super();
    this.state = {
        name:'老王八',
        msg:'今年58'
    }
}

parentChange(data){
console.log(data)
this.setState({msg:data});

}


render(){
    return(
        <div>
        <h1>老王组件</h1>
        <p>姓名:{this.state.name}</p>
        <p>介绍:{this.state.msg}</p>

        <Sub {...this.state} parentChange={this.parentChange.bind(this)} />

        
         </div>
    )
}


}




// function Parent() {
//     return(
//       <div>
//         parent
//        <Sub/>
//       </div>
//     )
//   }
  
  export default Parent;