const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
              id: '',
              name: '',
            }
        }
    },
    methods: {
        register(){
            axios.post("http://47.100.249.130:2375/user/register",
                //参数列表
                    {
                        'name': 'IvanPun'
                    },
                //请求头配置   
                    {
                        headers: {}
                    }
                ).then((res)=>{
                    console.log(res)
                })
            //window.location.href = "../user/index.html";
        },

        goLogin(){
            window.location.href = "login.html";
        }
    },
    mounted() {
    },
  })