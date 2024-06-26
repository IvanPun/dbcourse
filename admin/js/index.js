const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
      return {
        announcements: [
            {
                type: "系统通知",
                color: "color-1",
                text: "吃货小花狮正式上线为大家服务！！！",
                time: "2023年05月10日 00:00:00",
            },
            {
                type: "食堂消息推送",
                color: "color-2",
                text: "由今天起到5月20日, 河西食堂某某窗口所有菜品9折",
                time: "2023年05月8日 12:00:00",
            }
        ],
        photo_list: ["../photos/f1.jpg", "../photos/f2.jpeg", "../photos/f3.jpg", "../photos/f4.png"]
      }
    },
    methods: {
      reloadData(){
        axios.get('http://124.71.207.55:8081/getNotification', {
          headers: {
            session: localStorage.getItem("session_id")
          }
        })
        .then(result =>{
          //console.log(result);
          result = result.data;
          for(item of result){
            //console.log(item);
            if (item.type == 1){
              type = "系统通知";
              color =  "color-1";
            }else{
              type = "食堂消息推送";
              color =  "color-2";
            }
            text = item.content;
            time = this.formatDate(item.releaseDate);
            
            this.announcements.push({
              type: type,
              color: color,
              text: text,
              time: time
            });
          }
        })
        //console.log(this.announcements);
      },

      formatDate(inputDate) {
        // 将输入字符串解析为 Date 对象
        const date = new Date(inputDate);
    
        // 获取年份、月份、日期、小时、分钟和秒数
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月份从 0 开始，需要加 1
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
    
        // 将月份、日期、小时、分钟和秒数格式化为两位数
        const formattedMonth = month.toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
    
        // 拼接成目标格式的字符串
        const formattedDate = `${year}年${formattedMonth}月${formattedDay}日 ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
        return formattedDate;
      }
    },
    mounted() {
      this.reloadData();
    },
  })