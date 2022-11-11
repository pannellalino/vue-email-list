const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email: []
    }
  },
  methods:{
    // prendo l Api url (funzione che mi genera randomicamente una mail) e lo stampo in pagina, uso un ciclo for per ottenere 10 mail random in pagina
    getApi(){
    for(let i = 0; i < 10; i++){
      axios.get(this.apiUrl)
      .then(result =>{
        this.email.push(result.data.response);
        console.log(result.data.response);
      })
    }
    }
  },
  mounted(){
    this.getApi();
  }
}).mount('#app')