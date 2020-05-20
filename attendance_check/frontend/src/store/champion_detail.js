


const state = {
    setSelect_ChampionName: "",
    setSelect_ChampionImage: "",
    setSelect_ChampionID: "",
    setSelect_Runes1_: null,
    setSelect_Runes2_: null,
    setSelect_Runes1_Champion: [[], [], [], []],
    setSelect_Runes2_Champion: [[], [], []],
    setSelect_Runes3_: null,
    setSelect_Runes4_: null,
    setSelect_Runes3_Champion: [[], [], [], []],
    setSelect_Runes4_Champion: [[], [], []],
    setSelect_selected_Runes_1: [],
    setSelect_selected_Runes_2: [],
    setSelect_win_rate: null,
    setSelect_pick_rate: null,
    setSelect_ban_rate: null,
    setSelect_spell: null,

    setSelect_detail_Champion: null,
    
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
    setSelect_Champion: function (state, data) {
        this.state.setSelect_ChampionName = data.name
        this.state.setSelect_ChampionImage = data.image
        this.state.setSelect_ChampionID = data.id
      },
      setSelect_Runes_Champ: function (state, data) {
        var runestemp = data.runesdata
        var datatemp = data.champdata
        var spelltemp = data.champspell
        var runeImage = {
          8000: { name: "정밀", src: 'perk-images/Styles/7201_Precision.png' },
          8100: { name: "지배", src: 'perk-images/Styles/7200_Domination.png' },
          8200: { name: "마법", src: 'perk-images/Styles/7202_Sorcery.png' },
          8300: { name: "영감", src: 'perk-images/Styles/7203_Whimsy.png' },
          8400: { name: "결의", src: 'perk-images/Styles/7204_Resolve.png' }
        };
        this.state.setSelect_Runes1_Champion = [[], [], [], []];
        this.state.setSelect_Runes2_Champion = [[], [], []];
        this.state.setSelect_Runes3_Champion = [[], [], [], []];
        this.state.setSelect_Runes4_Champion = [[], [], []];
  
  
        this.state.setSelect_win_rate = datatemp[0].win_rate;
        this.state.setSelect_pick_rate = datatemp[0].pick_rate;
        this.state.setSelect_ban_rate = datatemp[0].ban_rate;
        this.state.setSelect_spell = spelltemp;
        this.state.setSelect_selected_Runes_1 = [];
        this.state.setSelect_selected_Runes_2 = [];
  
  
        // console.log(this.state.runeImage['a8000']);
        var tempid1 = datatemp[0].rune1_1, tempid2 = datatemp[0].rune2_1, tempid3 = datatemp[0].rune1_2, tempid4 = datatemp[0].rune2_2;
        var x, y;
        var tempperk1, tempperk2;
  
        //set selected perks 
        for(var i=0; i<6; i++){
          tempperk1='a'+datatemp[0]['perk'+i+'_1']
          tempperk2='b'+datatemp[0]['perk'+i+'_2']
          this.state.setSelect_selected_Runes_1.push(tempperk1);
          this.state.setSelect_selected_Runes_2.push(tempperk2);
        }
  
        //runes main image
        this.state.setSelect_Runes1_ = { image: runeImage[tempid1].src, id: tempid1 };
        this.state.setSelect_Runes2_ = { image: runeImage[tempid2].src, id: tempid2 };
        this.state.setSelect_Runes3_ = { image: runeImage[tempid3].src, id: tempid3 };
        this.state.setSelect_Runes4_ = { image: runeImage[tempid4].src, id: tempid4 };
        //setting first rune
        for (var r of runestemp.runes1) {
          x = r.x - 1;
          y = r.y - 1;
         
  
          if (r.category == tempid1) {
            this.state.setSelect_Runes1_Champion[y][x] = { runeobj: r, id: 'a' + r.id };
  
          } else if (r.category == tempid2) {
            if (y == 0) continue;
            this.state.setSelect_Runes2_Champion[y - 1][x] = { runeobj: r, id: 'a' + r.id };
  
          }
        }
        //setting second rune
        for (var r of runestemp.runes2) {
          x = r.x - 1;
          y = r.y - 1;
          if (r.category == tempid3) {
            this.state.setSelect_Runes3_Champion[y][x] = { runeobj: r, id: 'b' + r.id };
          } else if (r.category == tempid4) {
            if (y == 0) continue;
            this.state.setSelect_Runes4_Champion[y - 1][x] = { runeobj: r, id: 'b' + r.id };
          }
        }
      },
      setSelect_detail_Champ: function (state, data) {
        this.state.setSelect_detail_Champion = data.data
      },
   
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }