


const state = {

    setTotalRecord: [],
    setSelect_IndividualRunes1_: null,
    setSelect_IndividualRunes2_: null,
    setSelect_Runes1_IndividualChampion: [[], [], [], []],
    setSelect_Runes2_IndividualChampion: [[], [], []],
    setGameRecord_playerInfo: [],
    setGameRecord_tier: [],

    setGameRecord_matchInfo: [],
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
    setTotalRecord: function (state, data) {
        this.state.setTotalRecord = data
      },
  
    setTotalRecordAdd: function (state, data) {
        for(var i=0; i<5; i++)
          this.state.setTotalRecord.match_list.push(data.data[i])
      },
      setFind_Runes_IndividualChamp: function (state, data) {
        var temp = data.data
        var tempid;
        var x, y;
  
        //runes main image
        this.state.setSelect_IndividualRunes1_ = { image: temp[0].image1, id: temp[0].id1 };
        this.state.setSelect_IndividualRunes2_ = { image: temp[temp.length - 1].image1, id: temp[temp.length - 1].id1 };
        tempid = temp[0].id1;
  
        for (var r of temp) {
          x = r.x - 1;
          y = r.y - 1;
  
          if (r.id1 == tempid) {
            this.state.setSelect_Runes1_IndividualChampion[y][x] = { image: r.image2, id: r.id2 };
          } else {
            if (y == 0) continue;
            this.state.setSelect_Runes2_IndividualChampion[y - 1][x] = { image: r.image2, id: r.id2 };
          }
        }
      },
      setGameRecord_playerInfo: function (state, data) {
        this.state.setGameRecord_playerInfo = data.player_info
        this.state.setGameRecord_tier = data.tier
      },
      setGameRecord_matchInfo: function (state, data) {
        this.state.setGameRecord_matchInfo = data
      },
   
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }