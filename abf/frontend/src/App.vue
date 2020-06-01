<template>
<v-flex class="ma-0 pa-0">
  <v-app v-if="IsLogin">

    <v-app-bar app color="#FFF">
      <v-flex>
        <v-img src="./assets/ajou.png" width="160"/>
      </v-flex>
      <v-spacer></v-spacer>
      {{member_id}} {{name}} 님
      <!-- <v-select :items="IdentityItems" v-model="Identity"></v-select> -->
      <v-btn class="ml-4" color="primary" @click="LogOut"> 로그 아웃</v-btn>
    </v-app-bar>

    <v-content v-if="Identity=='student'">
      <Student></Student>
    </v-content>
    <v-content v-else-if="Identity=='professor'">
      <Professor></Professor>
    </v-content>
    <v-content v-else-if="Identity=='administer'">
      <Administer></Administer>
    </v-content>

  </v-app>
  <v-app v-else-if="!IsLogin">
    <LogIn @childs-event="parentsMethod"></LogIn>
  </v-app>
</v-flex>
</template>

<script>
import LogIn from './views/LogIn';
import Student from './views/Student';
import Professor from './views/Professor';
import Administer from './views/Administer';

export default {
  name: 'App',

  components: {
    LogIn,
    Student,
    Professor,
    Administer,
  },

  data: () => ({
    tab: null,
    IsLogin:false,
    Identity:"administer",

    IdentityItems: ['student', 'professor','administer'],

    name:'',
    member_id:'',

  }),
  methods:{
    LogOut: function(){
      this.IsLogin=false
    },
    parentsMethod: function(message){
      console.log(message)
      this.name = message.name
      this.member_id = message.member_id
      this.Identity = message.type
      this.IsLogin=true
    }
  }
};
</script>
