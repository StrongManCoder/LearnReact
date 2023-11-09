/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-10-27 16:47:49
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-10-30 15:09:32
 * @FilePath: /project/src/comment/CommentForm.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

class CommentForm extends React.Component{
render(){
    return(
        <form className='ui replay form'>
            <div className='field'>
                <input type='text' placeholder='姓名' ></input>
            </div>
            <div className='field'>
            <textarea placeholder='评论'></textarea>
            </div>
            <button type='submit' className='ui blue button'>
                添加评论
            </button>
        </form>
        

    )
}

}


export default CommentForm;