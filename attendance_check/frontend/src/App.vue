<template>
<v-app>
  <div class="form-panel one py-0">
    <div class="form-header">
      <h1>아주대 전자 출결 시스템</h1>
    </div>

    <div class="form-content">
      <v-layout columns class="ml-1 mb-5">
        <v-flex class="grey1form" md="2" style="font-weight:bold">
          교수명
        </v-flex>
        <v-flex class="grey0form mx-3" md="3" style="font-weight:bold">
          XXX
        </v-flex>
        <v-flex class="grey1form ml-3" md="2" style="font-weight:bold">
          강의실
        </v-flex>
        <v-flex class="grey0form mx-3" md="3" style="font-weight:bold">
          팔달관 XXX
        </v-flex>
      </v-layout>

      <v-layout columns class="ml-1">
        <v-flex class="grey1form" md="2" style="font-weight:bold">
          교과목명
        </v-flex>
        <v-flex class="grey0form mx-3" md="3" style="font-weight:bold">
          XXX
        </v-flex>
        <v-flex class="grey1form ml-3" md="2" style="font-weight:bold">
          교과목 코드
        </v-flex>
        <v-flex class="grey0form mx-3" md="3" style="font-weight:bold">
          XXX
        </v-flex>
      </v-layout>
    </div>
  </div>

  <div class="form-panel one" style="width:100%; height:100px;">
    <v-flex class="grey0form ml-1" md="2" columns>

      <v-flex>
        <v-img :src="require('@/assets/aham.png')" style="width:400px;"/>
      </v-flex>

      <v-flex align-self-center>
        <v-flex style="text-align:center;">
          <p style="font-weight:bold">{{$moment(time).format('YYYY년 MM월 DD일 HH시 mm분 ss초')}}</p>
        </v-flex>
        <v-flex class="form-group" dark>
          <button @click="Attendance">출석</button>
        </v-flex>
      </v-flex>
    </v-flex>
  </div>

</v-app>
</template>

<script>
var moment = require('vue-moment');
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    time: ''
  }),
  methods:{
    Attendance:function(){
      this.$http
        .post("/api/check", {
          time:this.time,
        })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          alert("connection error occured");
        });
      
    }
  },
  created() {
    setInterval(() => {
      this.time = new Date();
    }, 1000)
  }
};
</script>



<style rel="stylesheet">

.grey0form {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
}

.grey1form {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
}

.form {
  z-index: 15;
  position: relative;
  background: #FFFFFF;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
}

.form-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 0 0 20px;
}
.form-group label {
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .2em;
}
.two .form-group label {
  color: #FFFFFF;
}
.form-group input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
}
.form-group input:focus {
  color: rgba(0, 0, 0, 0.8);
}
.two .form-group input {
  color: #FFFFFF;
}
.two .form-group input:focus {
  color: #FFFFFF;
}
.form-group button {
  outline: none;
  background: #4285F4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #FFFFFF;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
}
.two .form-group button {
  background: #FFFFFF;
  color: #4285F4;
}
.form-group .form-remember {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}
.form-group .form-remember input[type='checkbox'] {
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
}
.form-group .form-recovery {
  color: #4285F4;
  font-size: 12px;
  text-decoration: none;
}
.form-panel {
  padding: 60px calc(5% + 60px) 60px 60px;
  box-sizing: border-box;
}
.form-panel.one:before {
  content: '';
  display: block;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
}
.form-panel.one.hidden:before {
  display: block;
  opacity: 1;
  visibility: visible;
}
.form-panel.two {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 95%;
  background: #4285F4;
  width: 100%;
  min-height: 100%;
  padding: 60px calc(10% + 60px) 60px 60px;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
  cursor: pointer;
}
.form-panel.two:before, .form-panel.two:after {
  content: '';
  display: block;
  position: absolute;
  top: 60px;
  left: 1.5%;
  background: rgba(255, 255, 255, 0.2);
  height: 30px;
  width: 2px;
  -webkit-transition: 0.3s ease;
          transition: 0.3s ease;
}
.form-panel.two:after {
  left: 3%;
}
.form-panel.two:hover {
  left: 93%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.form-panel.two:hover:before, .form-panel.two:hover:after {
  opacity: 0;
}
.form-panel.two.active {
  left: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: default;
}
.form-panel.two.active:before, .form-panel.two.active:after {
  opacity: 0;
}
.form-header {
  margin: 0 0 40px;
}
.form-header h1 {
  padding: 4px 0;
  color: #4285F4;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
.two .form-header h1 {
  position: relative;
  z-index: 40;
  color: #FFFFFF;
}
.pen-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 600px;
  margin: 20px auto 100px;
}
.pen-footer a {
  color: #FFFFFF;
  font-size: 12px;
  text-decoration: none;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.pen-footer a .material-icons {
  width: 12px;
  margin: 0 5px;
  vertical-align: middle;
  font-size: 12px;
}
.cp-fab {
  background: #FFFFFF !important;
  color: #4285F4 !important;
}
</style>