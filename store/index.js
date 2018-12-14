import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: () => ({
        questions: [],
        answers: []
      }),
      
      mutations: {

        setQuestions (state, questions) {
            state.question = questions
        },

        setAnswers (state, answers) {
          state.answers = answers
        },
              
      }
    })
  }

export default createStore

export const getters = {
    
};
