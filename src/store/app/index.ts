import { Module, ActionContext } from 'vuex'

const actions = {

  // 修改布局设置
  changeSetting ({ commit }: ActionContext<any, any>, data) {
    commit('CHANGE_SETTING', data)
  },
  // 设置网页标题
  setTitle ({ commit }, title) {
    state.title = title
  }
}
