const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
      return {
        activeIndex: '2',
        personalPhoto: '../test_photo/icon.jpg',
        fit: 'fill',
        rightInfo: [
            {key: '姓名', value: ''},
            {key: '性別', value: ''},
            {key: '生日日期', value: ''},
            {key: '加入平台的日期', value: ''},
            {key: '累计签到天数', value: ''},
            {key: '今日是否签到', value: ''},
            {key: '给动漫评分的平均数', value: ''},
        ],
        
        
      }
    },
    methods: {
        handleSelect(key) {
          console.log(key);
          if(key == 1){
            window.location.href = "index.html";
          }else if(key == 2){
              window.location.href = "personal.html";
          }else if(key == 3){
            window.location.href = "rank.html";
          }
      },

        logout() {
          this.$confirm('是否确认登出？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            localStorage.setItem('username', null);
            localStorage.setItem('userid', null);
            localStorage.setItem('token', null);
            window.location.href = "../login/login.html";
          }).catch(() => {
         
          });
        },

        reloadData(){
          var userId = localStorage.getItem('userid');
          var token = localStorage.getItem('token');
          var username = localStorage.getItem('username');
          console.log(userId + username);
          axios.get('http://47.100.249.130:2375/user/login?userId='+userId+'&name='+username, {
            headers: {
              
            }
          })
          .then(result =>{
            var data = result.data.data.user;
            console.log(data);
            this.rightInfo.forEach(item => {
              if (item.key === '姓名') {
                  item.value = data.username;
              }
              if (item.key === '性別') {
                if(data.gender == 0){
                  item.value = '男';
                }else{
                  item.value = '女';
                }
              }
              if (item.key === '生日日期') {
                item.value = data.birthday;
              }
              if (item.key === '加入平台的日期') {
                item.value = data.joined;
              }
              if (item.key === '累计签到天数') {
                item.value = data.attDays;
              }
              if (item.key === '用户今日是否签到') {
                if(data.hasAttended == 0){
                  item.value = '未签到';
                }else{
                  item.value = '已签到';
                }
              }
              if (item.key === '给动漫评分的平均数') {
                item.value = data.meanScore;
              }
              if (item.key === '给动漫评分的平均数') {
                item.value = data.meanScore;
              }
              
            });
          })
            
        }

      
    },
    mounted() {
      this.reloadData();
    },
  })