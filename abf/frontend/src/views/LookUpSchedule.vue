<template>
  <div class="LookUpSchedule">
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
              :items="WeekItems"
              label="주차 선택"
            ></v-select>
          </v-col>
        </v-row>
      </v-layout>

      <v-container class="ml-10">
        <TimeTable></TimeTable>
      </v-container>
      

      
    </v-card>
  </div>
</template>

<script>
import TimeTable from "../components/LookUpSchedule/TimeTable"
export default {
  name: 'LookUpSchedule',
  components: {
    TimeTable
  },
  data () {
    return {
      SemesterItems: ['2019학년도 2학기', '2020학년도 1학기'],
      WeekItems: ['1주차', '2주차', '4주차', '5주차', '6주차', '7주차', '8주차', '9주차', '10주차', '11주차', '12주차', '13주차', '14주차', '15주차', '16주차'],
    }
  },
}
</script>
