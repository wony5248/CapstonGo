<template>
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
            <v-container v-if="item.tab=='출결 현황 조회'" class="ma-0 pa-0">
                <LookUpAttendence></LookUpAttendence>
            </v-container>
            <v-container v-else-if="item.tab=='시간표 조회'" class="ma-0 pa-0"> 
                <LookUpSchedule></LookUpSchedule>
            </v-container>
            <v-container v-else-if="item.tab=='강의 정보 조회'" class="ma-0 pa-0">
                <LookUpLectureInfo></LookUpLectureInfo>
            </v-container>
            <v-container v-else-if="item.tab=='출결 변경 신청'" class="ma-0 pa-0">
                <RequestChangeAttendence></RequestChangeAttendence>
            </v-container>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-container>
    </v-container>
</template>

<script>
import LookUpAttendence from '../components/LookUpAttendence';
import LookUpSchedule from '../components/LookUpSchedule';
import LookUpLectureInfo from '../components/LookUpLectureInfo';
import RequestChangeAttendence from '../components/RequestChangeAttendence';

export default {
  name: 'Student',

  components: {
    LookUpAttendence,
    LookUpSchedule,
    LookUpLectureInfo,
    RequestChangeAttendence,
  },

  data: () => ({
    tab: null,
    items: [
      { tab: '출결 현황 조회', content: 'Tab 2 Content' },
      { tab: '시간표 조회', content: 'Tab 3 Content' },
      { tab: '강의 정보 조회', content: 'Tab 4 Content' },
      { tab: '출결 변경 신청', content: 'Tab 5 Content' },
    ],
  }),
  created(){
    this.$http
      .get("/api/users")
      .then(response => {
        console.log(response,"받음")
      })
      .catch(err => {
        alert("connection error occured");
      });
  }
};
</script>
