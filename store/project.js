
export const state = () => ({
  projects: null,
  aboutProjects: null
})

export const getters = {

}

export const mutations = {

  setFeaturedProjects(state, payload) {
    state.projects = payload
  },

  setAboutFeaturedProjects(state, payload) {
    state.aboutProjects = payload
  }
}

export const actions = {
  async getProjects(state) {
    // make request
    return res.data;
  }
}
