const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
      return {
        activeIndex: '1',
        search: '',
        genres: '',
        score: ''
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

      genres_changed(tab){
        console.log(tab.$options.propsData.label + tab.$options.propsData.name);
      },

      checkdetail(){
        console.log("hello");
        window.location.href = "animeDetail.html";
      }
    },
    mounted() {
      this.reloadData();
    },
  })