var app = new Vue({
    el: '#app',
    data: {
      inputName: "",
      message: ``,
    },
    methods: {
        saluta: function(){
               this.message = 'Ciao '+ this.inputName;
      }
    }
  });


  