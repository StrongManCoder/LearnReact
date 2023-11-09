/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-08 15:23:51
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-08 15:31:59
 * @FilePath: /project/src/eventbus.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {EventEmitter} from 'events' 

const eventBus = new EventEmitter();

export default eventBus;