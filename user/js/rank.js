const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
        return {
            activeIndex: '3',
            tableData: [{
                rank: '1',
                name: '王小虎',
                content: '5'
              }, {
                rank: '2',
                name: '王小虎',
                content: '5'
              }, {
                rank: '3',
                name: '王小虎',
                content: '5'
              }, {
                rank: '4',
                name: '王小虎',
                content: '5'
              }]
        }
    },
    methods: {
        reloadData(){
        
        },  
        
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
    },
    mounted() {
      this.reloadData();
    },
  })