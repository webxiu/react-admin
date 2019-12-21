/**
 * 包含n个action creator 函数的模块
 * 同步action: 对象 {type: 'xxx', data: 数据}
 * 异步action: 函数 dispatch => {}
 */

import { SET_HEAD_TITLE, SET_USER } from './action-type';

export const setHeadTitle = (headTitle) => ({ type: SET_HEAD_TITLE, data: headTitle })
export const setUser = (user) => ({ type: SET_USER, data: user })