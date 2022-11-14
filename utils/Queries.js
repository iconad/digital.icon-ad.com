export default class Queries {

  constructor () {}

  tab() {
    const screen = window.matchMedia('(max-width: 1280px)')
    return screen.matches ? true : false
  }

  mobile() {
    const screen = window.matchMedia('(max-width: 768px)')
    return screen.matches ? true : false
  }



}
