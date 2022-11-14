
export const state = () => ({
  isCoverVideo: false,
  current: null,
  isMenu: false
})

export const getters = {

}

export const mutations = {

  setIsCoverVideo(state, payload) {
    state.isCoverVideo = payload
  },

  setIsMenu(state, payload) {
    state.isMenu = payload
  },

  setCurrent(state, payload) {

    if (payload.indexOf("/digital") >= 0)
      state.current = 'digital'
    else if (payload.indexOf("/icon-plus") >= 0)
      state.current = 'icon plus'
    else if (payload.indexOf("/branding-studio") >= 0)
      state.current = 'brandingstudio'
    else if (payload == "/")
      state.current = 'advertising'

  }
}

export const actions = {

  // async checkCurrentTopNav(state) {

  // }

}
