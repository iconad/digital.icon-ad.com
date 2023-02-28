
export const state = () => ({
    captcha: {
      num1: null,
      num2: null,
      input: null,
      status: false,
      result: null,
      opreator: null,
      success: false,
      error: false,
      message: 'Answer the quesiton to submit',
      attempts: 0
    }
  });
  
  export const mutations = {
  
    generateCaptcha: function(state) {
      const methods = ["+","*"];
      var method = methods[Math.floor(Math.random() * methods.length)];
  
      state.captcha.num1 = Math.floor(Math.random() * 5);
      state.captcha.num2 = Math.floor(Math.random() * 5);
      state.captcha.opreator = method == '*' ? 'x' : method;
      state.captcha.result = eval(`${state.captcha.num2}${method}${state.captcha.num1}`)
    },
  
    checkCaptcha: function(state, payload) {
      if(payload) {
        if(payload == state.captcha.result) {
  
          state.captcha.status = true
          state.captcha.error = false
          state.captcha.success = true
          state.captcha.message = "Looks like you're a human after all! We knew you weren't a robot. You are welcome to submit the form."
  
        } else {
          const messages = [
            `Are you a robot, or just really bad at typing?`,
            `No bots allowed! We're saving those for our next project.`,
            `Oops, wrong universe! Try again, extraterrestrial.`,
            `This is no place for bots!`,
            `That's not a valid answer, but we'll accept a funny joke instead.`,
            `You're one step closer to unlocking our creative secrets`,
            'Are you a robot or a brand-new cyborg intern?',
            `This captcha is so easy, even our AI overlords can do it.`,
            `Prove you're not a robot, or at least a friendly one.`,
            `If at first you don't succeed, blame the captcha.`,
            `If you can keep up with our speed, you can surely solve this captcha.`,
          ]
          const message = messages[Math.floor(Math.random() * messages.length)];
          state.captcha.status = false
          state.captcha.success = false
          state.captcha.error = true
          state.captcha.message = message
          state.captcha.attempts = state.captcha.attempts+1
  
        }
      }
    },
  
    resetAttempts: function(state, payload) {
      state.captcha.attempts = 0
    },
  
    resetCaptcha: function(state, payload) {
      state.captcha.status = false
      state.captcha.success = false
      state.captcha.error = false
      state.captcha.message = "Answer the quesiton to submit"
      state.captcha.input = null
      state.captcha.attempts = 0
    }
  }
  
  export const actions = {
  
    checkCaptcha ({ commit, state }, payload) {
      if (state.captcha.attempts < 4) {
        commit("checkCaptcha", payload);
      }else{
        commit('generateCaptcha')
        commit('resetAttempts')
      }
  
    },
  
  };
  