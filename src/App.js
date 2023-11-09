/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-25 10:21:18
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-08 15:33:30
 * @FilePath: /project/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import React,{Component} from 'react';
import Index from './Project/index'

import CommentBox from './comment/CommentBox'

import Footer from './Footer'
import Profile from './Profile'

import Father from './Father'

import Context from './context'
// function App() {
//   return(
//     <div>
//       123435435
//     </div>
//   )
// }



// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }



// //函数式定义 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//         </h1>

//         <Main name="帅哥" age="18" height="185"/>
//         <Footer name="长的吓人" />
//         <Profile/>

//         {/* <Index />
//         <CommentBox/> */}

//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//         </a>
//       </header>
//     </div>
//   );
// }

// 类组件 定义状态

const ctxObj = {
  name:'张三丰',
  age:22
} 

//创建一个全局context对象   传入一个默认值
const ContextObj = React.createContext(ctxObj); 
class App extends React.Component {
  
  //
  static contextType = ContextObj;

  
  
  constructor(){
    super();

    this.name = ['张三','李四','王五'];

    this.state = {
      name:'芳芳老师',
      count:0
    }

    //绑定this
this.changeCount = this.changeCount.bind(this);

  }

  //在组件挂载后立刻调用 
  componentDidMount(){
  }

  //会在组件更新之后立刻调用  首次渲染的时候不会执行   更新的时候执行
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render(){
    return(
         <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        </h1>
        <Main name="帅哥" age="18" height="185"/>
        <Footer name="长的吓人" />
        <Profile name={this.name}/>
        <hr/>
        <Father/>
        <button onClick={this.changeCount}>点击我</button>
        <h2>点击次数{this.state.count}</h2>

        {/* <Index />
        <CommentBox/> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>

    )
  }

  changeCount(){
    let n = this.state.count;
    n+= 1;
    this.setState({
      count:n
    })
  }



}

export default App;
