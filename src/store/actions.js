import api from '../http'
import Vue from 'vue'
import router from '../router/index'
import * as types from './types'

export default {
	UserLogin({ commit }, data) {
		commit(types.LOGIN, data)
	},

	// 用户登出
	UserLogout({ commit }) {
		commit(types.LOGOUT)
	}
}
