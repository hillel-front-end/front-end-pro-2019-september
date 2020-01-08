// var app = new Vue({
//   el: '#app',
//   data: {
//     x: 200,
//     y: 300,
//     list: [1, 2, 3, 4],
//     info: {}
//   }
// })

// console.log(app);

// setTimeout(() => {
//   // console.log(app.message);
//   // app.message = 600;
//   Vue.set(app.info, 'message', 600);
// }, 1500)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     appearence: 'transition: .5s; color: green;',
//     value: 10,
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// res = appearence  + 'font-size:' + value*3 + 'px';

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true,
//     info: 'Hello Info!'
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     item: [1, 2],
//     list: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ],
//     info: {
//       x: 1,
//       y: 3,
//       z: 5,
//       p: 6,
//       l: 9
//     }
//   }
// })

// [].forEach(element => {
  
// });



// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!',
//     counter: 3,
//     list: [6, 9, 18],
//     specialNames: [
//       "super",
//       "puper",
//       "trooper",
//       "cooper",
//       "dooper"
//     ],
//     classNames: []
//   },
//   methods: {
//     calculate(value) {
//       return `<sup>${value*10}</sup>`;
//     },
//     onClick(event, id) {
//       // console.log('clicked', arguments, id);
//       this.counter++;
//     },
//     addRandClass() {
//       let special = this.specialNames[Math.floor(Math.random()*this.specialNames.length)];
      
//       this.classNames.push(special);
//     }
//   }
// })

// // // ---------------------------------------

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
    result: 'RESULT',
    x: 10,
    switcher: false,
    date: ''
  },
  methods: {
    onInput(event) {
      this.message = event.target.value
    }
  }
})


// -----------------------------
