new Vue ({
  el: '#vue-app',

data: {
  coments: []
},

methods: {
    getComents (){
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => this.coments = response.data)
    }

}

});
