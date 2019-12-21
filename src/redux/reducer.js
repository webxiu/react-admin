/**
 * 用来根据老的state和指定的action生成并返回新的state
 */

// 引入合并函数
import { combineReducers } from 'redux';
// 引入本地存储
import userInfo from '../utils/userInfo';
import { SET_HEAD_TITLE, SET_USER } from './action-type';


// 用来管理头部标题的reducer
const initHeadTitle = '首页'
function headTitle(state = initHeadTitle, action) {
    switch (action.type) {
        case SET_HEAD_TITLE:
            return action.data
        default:
            return state
    }

}
// 用来管理当前登录的reducer
const initUser = userInfo.getUser()
function user(state = initUser, action) {
    switch (action.type) {
        // case value:

        //     break;

        default:
            return state
    }

}

/**
 * 向外默认暴露的是合并产生的总的reducer函数
 * 管理的总的state的解构:
 * {
 *  headerTitle: '首页',
 *  user: {}
 *  }
 */
export default combineReducers({
    headTitle,
    user
})