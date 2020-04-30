<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" width="40"/>
        <v-img min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-content>
      <v-container class="ma-0 pa-0" row style="height:100%;">
        <v-container class="ma-0 pa-0" style="width:15%; height:100%;">
          <v-tabs v-model="tab" background-color="primary" dark vertical style="height:100%;">
            <v-tab v-for="item in items" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </v-container>
        <v-container class="ma-0 pa-0" style="width:85%">
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <v-card flat>
                <v-container v-if="item.tab=='HOME'" class="ma-0 pa-0">
                  <HOME></HOME>
                </v-container>
                <v-container v-else-if="item.tab=='출결 현황 조회'" class="ma-0 pa-0">
                  <LookUpAttendence></LookUpAttendence>
                </v-container>
                <v-container v-else-if="item.tab=='시간표 조회'" class="ma-0 pa-0"> 
                  <LookUpSchedule></LookUpSchedule>
                </v-container>
                <v-container v-else-if="item.tab=='강의 정보 조회'" class="ma-0 pa-0">
                  <LookUpLectureInfo></LookUpLectureInfo>
                </v-container>
                <v-container v-else-if="item.tab=='출결 변경 신청'" class="ma-0 pa-0">
                  <ChangeAttendence></ChangeAttendence>
                </v-container>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import HOME from './views/Home';
import LookUpAttendence from './views/LookUpAttendence';
import LookUpSchedule from './views/LookUpSchedule';
import LookUpLectureInfo from './views/LookUpLectureInfo';
import ChangeAttendence from './views/ChangeAttendence';

export default {
  name: 'App',

  components: {
    HOME,
    LookUpAttendence,
    LookUpSchedule,
    LookUpLectureInfo,
    ChangeAttendence,
  },

  data: () => ({
    tab: null,
    items: [
      { tab: 'HOME', content: 'Tab 1 Content' },
      { tab: '출결 현황 조회', content: 'Tab 2 Content' },
      { tab: '시간표 조회', content: 'Tab 3 Content' },
      { tab: '강의 정보 조회', content: 'Tab 4 Content' },
      { tab: '출결 변경 신청', content: 'Tab 5 Content' },
    ],
  }),
};
</script>
