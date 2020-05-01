<template>
  <div class="ChangeAttendence">
    <v-card class="ma-12" max-width="1000" outlined>
      <v-layout row class="ml-12">
        <v-row align="center">
          <v-col class="d-flex" md="9">
            <v-select
              :items="SemesterItems"
              label="학기 선택"
            ></v-select>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="d-flex"  md="9">
            <v-select
              :items="LectureItems"
              label="교과목명"
            ></v-select>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="d-flex"  md="9">
            <v-select
              :items="ResultItems"
              label="처리결과"
            ></v-select>
          </v-col>
        </v-row>
      </v-layout>

      <v-layout>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1" style="width:100%"></v-data-table>
      </v-layout>    
      
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ChangeAttendence',
  components: {
  },
  data(){
    return{
      SemesterItems: ['2019학년도 2학기', '2020학년도 1학기'],
      LectureItems: ['확률과 통계2', '모델링 시뮬레이션', 'SW캡스톤 디자인'],
      ResultItems: ['2019학년도 2학기', '2020학년도 1학기'],
      headers: [
        {
          text: '강의일시',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '교과목번호/분반', value: 'calories' },
        { text: '교과목명', value: 'fat' },
        { text: '주담당교수', value: 'carbs' },
        { text: '강의실', value: 'protein' },
        { text: '강의시간', value: 'iron' },
        { text: '현재/요청', value: 'iron' },
        { text: '처리결과', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  }
}
</script>
