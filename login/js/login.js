const app = new Vue({
    el: '#app',
    created() {
        //axios.defaults.baseURL = ''; // 设置基础URL
    },
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                userId: '',
                name: '',
            }
        }
    },
    methods: {
        login(){
            axios.get('http://47.100.249.130:2375/user/login?userId='+this.formLabelAlign.userId+'&name='+this.formLabelAlign.name, {
                headers: {
                  
                }
              })
              .then(result =>{
                var data = result.data.data;
                console.log(data);
                if(data.user == null){
                  this.$alert('ID或名称有误，请仔细检查', '登录错误', {
                    confirmButtonText: '确定',
                  });
                }else{
                  localStorage.setItem('username', data.user.username);
                  localStorage.setItem('userid', data.user.userId);
                  localStorage.setItem('token', data.jwt);
                  window.location.href = "../user/index.html";
                }
              })
        },

        goRegister(){
            window.location.href = "register.html";
        }
    },
    mounted() {
    },
  })