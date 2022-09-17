Vue.component('component', {
    template: '<div><p>${Alert}</p><button @click="yo">enter</button></div>',
    delimiters: ['${','}'],
    data: function(){
      return {
        Alert: 'G R'
      }
    },
    methods: {
      yo: function() {
        alert('Hi the full form of G R is Global Registration');
      }
    }
  });

  new Vue({
    el:'#w7',
    template: `<component/>`
  });
  