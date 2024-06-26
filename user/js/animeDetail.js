const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
      return {
        activeIndex: '',
        personalPhoto: '../test_photo/icon.jpg',
        fit: 'fill',
        rightInfo: [
            {key: '作品名称', value: 'Ivan'},
            {key: '评分', value: 'Ivan'},
            {key: '分类', value: 'Ivan'},
            {key: '概述', value: 'Ivan'},
            {key: '类型', value: 'Ivan'},
            {key: '集数', value: 'Ivan'},
            {key: '播出日期', value: 'Ivan'},
            {key: '动画首播时间', value: 'Ivan'},
            {key: '状态', value: 'Ivan'},
            {key: '动漫制作人', value: 'Ivan'},
            {key: '许可方', value: 'Ivan'},
            {key: '制作工作室', value: 'Ivan'},
            {key: '原始素材', value: 'Ivan'},
            {key: '每集持续时间', value: 'Ivan'},
            {key: '年龄分级', value: 'Ivan'},
            {key: '正在看的用户数量', value: 'Ivan'},
            {key: '看完的用户数量', value: 'Ivan'},
            {key: '人气', value: 'Ivan'},
            {key: '收藏人数', value: 'Ivan'},
            {key: '添加到列表的人数', value: 'Ivan'},
        ],
        isLiked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        isSaved: false,
        value: 3.5,
        
      }
    },
    methods: {
        reloadData(){
            const params = {
                pageNum: '1',
                pageSize: '5'
            };
            axios.get("http://47.100.249.130:2375/anime/page",{
                //参数列表
                   params:{ pageNum: '1', pageSize: '5'},
                //请求头配置  
                   headers:{}
                }).then((res)=>{
                    console.log(res)
             })
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

        toggleLike() {
            this.isLiked = !this.isLiked;
        },

        toggleSave() {
            this.isSaved = !this.isSaved;
        }

      
    },
    mounted() {
      this.reloadData();
    },
  })