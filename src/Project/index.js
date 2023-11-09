
/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-26 14:34:56
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-10-26 14:53:48
 * @FilePath: /project/src/Project/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Parent from './parent'
import React,{Component} from 'react';
import ReactDOM from 'react-dom'



function myButton (){
    return(
        <button> CLick ME!</button>
    )
}



function Index() {
  return(

    <div>
        <Parent/>
    </div>

    // <div>
    //   Project--Index
    //  <p>
    //     <button> CLick ME!</button>
    //     </p> 
    // </div>


  )
}

export default Index;