


const state = {
    setSelect_Simulation_ChampName: "",
    setSelect_Simulation_ChampImage: "",
    setSelect_Simulation_ChampLine: "",
    
    setChampionList: [],
    setChampionStat: [],

  }
  
  // getters
  const getters = {
   
  
    // cartTotalPrice: (state, getters) => {
    //   return getters.cartProducts.reduce((total, product) => {
    //     return total + product.price * product.quantity
    //   }, 0)
    // }
  }
  
  // actions
  const actions = {
   
  }
  
  // mutations
  const mutations = {
      
    setSelect_Simulation_Champ: function (state, data) {
        this.state.setSelect_Simulation_ChampName = data.name
        this.state.setSelect_Simulation_ChampImage = data.image
        this.state.setSelect_Simulation_ChampLine = data.tag
      },
      setChampionList: function (state, data) {
        // this.state.setChampionList = data
        const array = Array(data.data[data.data.length - 1].champ_id + 1).fill(null).map(() => Array());
        for (var i = 0; i < data.data.length; i++) {
          array[data.data[i].champ_id] = data.data[i]
        }
        this.state.setChampionList = array
      },
      setChampionStat: function (state, data) {
        const array = Array(data[data.length - 1].champ_id + 1).fill(null).map(() => Array());
        for (var i = 0; i < data.length; i++) {
          array[data[i].champ_id] = data[i]
        }
        this.state.setChampionStat = array
      },
  
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }