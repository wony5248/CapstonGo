import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      // storage:window.sessionStorage,
      // getState: (key) => Cookies.getJSON(key),
      // setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ],
  state: {
    //for champion list & champion details
    setShowsearch:false,

    setStatRuneImage:[
      [[5008,"perk-images/StatMods/StatModsAdaptiveForceIcon.png","적응형 능력치 +9"],[5005,"perk-images/StatMods/StatModsAttackSpeedIcon.png","공격 속도 +10%"],[5007,"perk-images/StatMods/StatModsCDRScalingIcon.png","재사용 대기시간 감소 +1% ~ 10%(레벨에 비례)"]],
      [[5008,"perk-images/StatMods/StatModsAdaptiveForceIcon.png","적응형 능력치 +9"],[5002,"perk-images/StatMods/StatModsArmorIcon.png","방어력 +6"],[5003,"perk-images/StatMods/StatModsMagicResIcon.png","마법 저항력 +8"]],
      [[5001,"perk-images/StatMods/StatModsHealthScalingIcon.png","체력 +15 ~ 90(레벨에 비례)"],[5002,"perk-images/StatMods/StatModsArmorIcon.png"],[5003,"perk-images/StatMods/StatModsMagicResIcon.png","마법 저항력 +8"]],
    ],
    setStatRuneInfo:{
      5001: {id:5001,src: "perk-images/StatMods/StatModsHealthScalingIcon.png",explain:"체력 +15 ~ 90(레벨에 비례)"},
      5002: {id:5002,src: "perk-images/StatMods/StatModsArmorIcon.png",explain:"방어력 +6"},
      5003: {id:5003,src: "perk-images/StatMods/StatModsMagicResIcon.png",explain:"마법 저항력 +8"},
      5005: {id:5005,src: "perk-images/StatMods/StatModsAttackSpeedIcon.png",explain:"공격 속도 +10%"},
      5007: {id:5007,src: "perk-images/StatMods/StatModsCDRScalingIcon.png",explain:"재사용 대기시간 감소 +1% ~ 10%(레벨에 비례)"},
      5008: {id:5008,src: "perk-images/StatMods/StatModsAdaptiveForceIcon.png",explain:"적응형 능력치 +9"},
    },

    setTotalRecord: [],
    setTotalRune:[],
    setAllChampion:[],
    //for champion
    setSelect_ChampionName: "",
    setSelect_ChampionImage: "",
    setSelect_ChampionID: "",
    setSelect_selected_Runes_1: [],
    setSelect_selected_Runes_2: [],
    setSelect_win_rate: null,
    setSelect_pick_rate: null,
    setSelect_ban_rate: null,
    setSelect_spell: null,

    setSelect_detail_Champion: null,
    setSelect_Runes1_: null,
    setSelect_Runes2_: null,
    setSelect_Runes1_Champion: [[], [], [], []],
    setSelect_Runes2_Champion: [[], [], []],
    setSelect_Runes3_: null,
    setSelect_Runes4_: null,
    setSelect_Runes3_Champion: [[], [], [], []],
    setSelect_Runes4_Champion: [[], [], []],

    //for individual champion run
    setSelect_IndividualRunes1_: null,
    setSelect_IndividualRunes2_: null,
    setSelect_Runes1_IndividualChampion: [[], [], [], []],
    setSelect_Runes2_IndividualChampion: [[], [], []],
    //for simulation 
    setSelect_Simulation_ChampName: "",
    setSelect_Simulation_ChampImage: "",
    setSelect_Simulation_ChampLine: "",
    //for simulation team power 
    set_blue_AllteamPower:{한타:0,스플릿:0,암살:0,CC:0,라인관리:0, 진입능력:0, 라인유지력:0, 탱킹:0, 힐_보호막능력:0},
    set_red_AllteamPower:{한타:0,스플릿:0,암살:0,CC:0,라인관리:0, 진입능력:0, 라인유지력:0, 탱킹:0, 힐_보호막능력:0},
    set_blue_AllStats:[],
    set_red_AllStats:[],
    set_blue_values:{TOP:30, JUNGLE:23,MIDDLE:10,BOTTOM:34,SUPPORT:23},
    set_red_values:{TOP:30, JUNGLE:23,MIDDLE:10,BOTTOM:34,SUPPORT:23},

    //for home
    setGameRecord_playerInfo: [],
    setGameRecord_tier: [],

    setGameRecord_matchInfo: [],

    setChampionListOriginal:[],
    setChampionList:[],
    setChampionStat:[],

    setRoflPath:"",
    setFileList:[],

    setClientPath:"",
    
    setAudioGameID:[],
    setVideoGameID:[],
    setTextGameID:[],

    setAudiolist:[],
    setVideolist:[],
    setTextlist:[],

    setCurrentSummonerData:[],
    setCurrentMyChampion:"",

    setAutoReady:"기본",

    setPreferPickChampTop:[],
    setPreferPickChampMid:[],
    setPreferPickChampJungle:[],
    setPreferPickChampBot:[],
    setPreferPickChampSupport:[],
    setPreferBanChamp:[],

    setPreferPickChampRank:[],
    setPreferPickChampNormal:[],
    
    setFisrtPick:0,

    setChampionBuildList:[],
    setSpellList:[],
  },
  mutations: {
    setAllChampion:function(state, data){
      this.state.setAllChampion=data
    },
    setShowSearch:function(state, data){
      this.state.setShowsearch=data.data
    },
    setTotalRecordAdd: function (state, data) {
      for(var i=0; i<5; i++)
        this.state.setTotalRecord.match_list.push(data.data[i])
    },
    setSelect_Champion: function (state, data) {
      this.state.setSelect_ChampionName = data.name
      this.state.setSelect_ChampionImage = data.image
      this.state.setSelect_ChampionID = data.id
    },
    setSelect_Simulation_Champ: function (state, data) {
      this.state.setSelect_Simulation_ChampName = data.name
      this.state.setSelect_Simulation_ChampImage = data.image
      this.state.setSelect_Simulation_ChampLine = data.tag
    },
    setGameRecord_playerInfo: function (state, data) {
      this.state.setGameRecord_playerInfo = data.player_info
      this.state.setGameRecord_tier = data.tier
    },
    setGameRecord_matchInfo: function (state, data) {
      this.state.setGameRecord_matchInfo = data
    },
    setTotalRecord: function (state, data) {
      this.state.setTotalRecord = data
    },
    setSelect_detail_Champ: function (state, data) {
      this.state.setSelect_detail_Champion = data.data
    },
    setTotalRune: function (state, data) {
      var runeTemp = {
        8000:{id:8000,name: "정밀", src: 'perk-images/Styles/7201_Precision.png',data:[[],[],[],[]]},
        8100:{id:8100,name: "지배", src: 'perk-images/Styles/7200_Domination.png',data:[[],[],[],[]]},
        8200:{id:8200,name: "마법", src: 'perk-images/Styles/7202_Sorcery.png',data:[[],[],[],[]]},
        8300:{id:8300,name: "영감", src: 'perk-images/Styles/7203_Whimsy.png',data:[[],[],[],[]]},
        8400:{id:8400,name: "결의", src: 'perk-images/Styles/7204_Resolve.png',data:[[],[],[],[]]},
      }
      for(var i=0; i<data.length; i++){
        if(data[i].category==8000){
          runeTemp["8000"].data[data[i]["y"]-1][data[i]["x"]-1]=data[i]
        }
        else if(data[i].category==8100){
          runeTemp["8100"].data[data[i]["y"]-1][data[i]["x"]-1]=data[i]
        }
        else if(data[i].category==8200){
          runeTemp["8200"].data[data[i]["y"]-1][data[i]["x"]-1]=data[i]
        }
        else if(data[i].category==8300){
          runeTemp["8300"].data[data[i]["y"]-1][data[i]["x"]-1]=data[i]
        }
        else if(data[i].category==8400){
          runeTemp["8400"].data[data[i]["y"]-1][data[i]["x"]-1]=data[i]
        }
      }
      this.state.setTotalRune=runeTemp
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
    setChampionListOriginal: function(state,data){
      this.state.setChampionListOriginal=data
    },
    setChampionList: function(state,data){
      // this.state.setChampionList = data
      const array = Array(data[data.length-1].champ_id+1).fill(null).map(() => Array());
      for(var i=0; i<data.length; i++){
        array[data[i].champ_id]=data[i]
      }
      this.state.setChampionList=array
    },
    setChampionStat: function(state,data){
      const array = Array(data[data.length-1].champ_id+1).fill(null).map(() => Array());
      for(var i=0; i<data.length; i++){
        array[data[i].champ_id]=data[i]
      }
      this.state.setChampionStat=array
    },

    setFileList: function(state,data){
      this.state.setRoflPath=data.path
      this.state.setFileList=data.list
    },
    setFileList_ForVideo: function(state,data){
      // this.state.setAudiolist=[]
      // this.state.setVideolist=[]
      // this.state.setTextlist=[]
      this.state.setAudiolist.push(data.audiolistTemp)
      this.state.setVideolist.push(data.videolistTemp)
      this.state.setTextlist.push(data.textlistTemp)
    },
    setFileList_GameID: function(state,data){
      // this.state.setAudioGameID=[]
      // this.state.setVideoGameID=[]
      // this.state.setTextGameID=[]
      
      this.state.setAudioGameID=data.audiolist
      this.state.setVideoGameID=data.videolist
      this.state.setTextGameID=data.textlist
    },
    setClientPath: function(state,data){
      this.state.setClientPath=data
    },
    setCurrentSummonerData: function(state,data){
      this.state.setCurrentSummonerData=data
    },
    setCurrentMyChampion: function(state,data){
      this.state.setCurrentMyChampion=data
    },
    setAutoReady: function(state,data){
      this.state.setAutoReady=data
    },

    setAutoChampPickRank: function(state,data){
      this.state.setPreferPickChampTop=data.PreferPickChampTop
      this.state.setPreferPickChampMid=data.PreferPickChampMid
      this.state.setPreferPickChampJungle=data.PreferPickChampJungle
      this.state.setPreferPickChampBot=data.PreferPickChampBot
      this.state.setPreferPickChampSupport=data.PreferPickChampSupport

      this.state.setPreferBanChamp=data.PreferBanChamp
    },
    setAutoChampPickNormalFinally: function(state,data){
      this.state.setPreferPickChampNormal=data
    },
    setAutoChampPickRankFinally: function(state,data){
      this.state.setPreferPickChampRank=data
    },
    setFisrtPick: function(state,data){
      this.state.setFisrtPick=data
    },
    setChampionBuildList: function(state,data){
      var arrTemp = data.data
      const array = Array(arrTemp[arrTemp.length-1].championId+1).fill(null).map(() => Array());
      for(var i=0; i<arrTemp.length; i++){
        array[arrTemp[i].championId]=arrTemp[i]
      }
      this.state.setChampionBuildList=array
    },
    setSpellList: function(state,data){
      var arrTemp = data.data
      const array = Array(arrTemp[arrTemp.length-1].id+1).fill(null).map(() => Array());
      for(var i=0; i<arrTemp.length; i++){
        array[arrTemp[i].id]=arrTemp[i]
      }
      this.state.setSpellList=array
    },
  },
  actions: {
  },
  modules: {

  },

})