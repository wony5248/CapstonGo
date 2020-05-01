<template>
  <v-app>

    <v-app-bar app color="#FFF">
      <v-flex>
        <v-img src="./assets/ajou.png" width="160"/>
      </v-flex>
      <v-spacer></v-spacer>
      201520968 윤준영 님 (소프트웨어학과)
      <v-select :items="IdentityItems" v-model="Identity"></v-select>
      <v-btn class="ml-4" color="primary"> 로그 아웃</v-btn>
    </v-app-bar>

    <v-content v-if="Identity=='Student'">
      <Student></Student>
    </v-content>
    <v-content v-else-if="Identity=='Professor'">
      <Professor></Professor>
    </v-content>
    <v-content v-else-if="Identity=='Administer'">
      <Administer></Administer>
    </v-content>

  </v-app>
</template>

<script>
import Student from './views/Student';
import Professor from './views/Professor';
import Administer from './views/Administer';

export default {
  name: 'App',

  components: {
    Student,
    Professor,
    Administer,
  },

  data: () => ({
    tab: null,
    Identity:"Administer",

    IdentityItems: ['Student', 'Professor','Administer'],

  }),
};
</script>
