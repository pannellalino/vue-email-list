const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email: []
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.email = result.data.response;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}).mount('#app')