/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-27 10:40:54
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-10-30 15:08:41
 * @FilePath: /project/src/comment/CommentBox.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends React.Component{

    render(){
        return(
            <div className='ui comments'>
            <h1>评论</h1>
            <div className='ui divider'></div>

            <CommentList/>
            <CommentForm/>

            </div>

            )
    };
}


export default CommentBox;