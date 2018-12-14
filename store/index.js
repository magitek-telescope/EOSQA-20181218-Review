import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: () => ({
        userAccount: "daidaides",
        balance: "2.0000 EOS",
        pub_key: "pub",
        prive_key: "5JieSd3S7SLadXS6uPdxgH2i87H4oTTxiKUHFa7eaqZHmd47gUD",
        questions: [
            {
            question_key: "1",
            title: "Hello",
            body: "aaaaaaaaaaaa",
            user_key: "0",
            pub_key: "EOS7",
            price: "0",
            view: "200",
            time_stamp: "2018-12-12",
    
          },
          {
            question_key: "2",
            title: "world",
            body: "bbbbbbbbbbbb",
            user_key: "0",
            pub_key: "EOS7",
            price: "0",
            view: "200",
            time_stamp: "2018-12-12",
          },
            ],
        answers: [{
            answer_key: "1",
            question_key: "1",
            answer: "dasda",
            user_key: "1",
            pub_key: "EOS8",
            point: "1.000",
            time_stamp: "2018-12-13"
            },
            {
            answer_key: "2",
            question_key: "2",
            answer: "uuuuuuu",
            user_key: "1",
            pub_key: "EOS8",
            point: "1.000",
            time_stamp: "2018-12-13"
            },

        ]
      }),
      mutations: {
        setUserAccount (state, userAccount) {
            state.userAccount = userAccount
        },

        setPub_key (state, pub_key) {
            state.pub_key = pub_key
            console.log(state.pub_key)
        }
              
      }
    })
  }

export default createStore
