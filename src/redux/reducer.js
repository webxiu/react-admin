/**
 * 用来根据老的state和指定的action生成并返回新的state
 */

// 引入合并函数
import { combineReducers } from 'redux';
// 引入本地存储
import userInfo from '../utils/userInfo';
import { 
    SET_HEAD_TITLE, 
    LOGIN_INFO, 
    SHOW_ERROR_MSG, 
    RESET_USER 
} from './action-type';


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
        case LOGIN_INFO:
            // 注意actions.js的叫loginData这里就必须一致
            return action.loginData 
        case SHOW_ERROR_MSG:
            const errorMsg = action.errorMsg
            // state.errorMsg = errorMsg // 极不推荐这种直接修改原数据的方式
            return { ...state, errorMsg }
        case RESET_USER:
            return {} // 返回空对象
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