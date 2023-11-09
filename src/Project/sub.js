/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-26 14:48:23
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-10-26 16:33:18
 * @FilePath: /project/src/Project/sub.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React,{Component} from 'react';


function MyButton() {
    return (
      <button>Click Me !!</button>
    );
  }

class Sub extends Component{
    constructor(props){
        super();
        this.state = {
            name:'小王八',
            msg:'现在已经8个月',
            parentMsg:props.msg,
        }
    }
    handleChange(e){
        this.setState({parentMsg:e.target.value});
        this.props.parentChange(e.target.value); //调用父方法
    }
    
    render(){
        let {name,msg,parentMsg} = this.state;
        let {name:pName,msg:pMsg} = this.props; //别名
        return(
            <div>
            <h1>{name}组件</h1>
            <p>姓名:{name}</p>
            <p>介绍:{msg}</p>
            <p>老王的介绍:{parentMsg}---{pName}</p>
            <MyButton />
            <p></p>
            <input type='text' value={parentMsg} onChange={(event)=>this.handleChange(event)} ></input>
 
            </div>
        )
    }
    
    
    }
    

// function Sub() {
//     return(
//       <div>
//        sub
//       </div>
  
  
//     )
//   }
  
  export default Sub;