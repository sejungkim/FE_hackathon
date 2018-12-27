var app = new Vue({
  el: '#app',
  data: {
    stories: [
      {
        imageUrl: 'ending',
        text: ["", "엔딩."],
      },
    ],
    activeIndex: 0,
    isLoaded: false,
  },
  methods: {
    addIndex() {
      if(this.activeIndex < 5) {
        this.activeIndex++
        this.activeChat();
      }
    },
    activeChat() {
      const typed = new Typed('.chat-text', {
        strings: this.stories[this.activeIndex].text,
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: (self) => {console.log('self:', self);}
      });
    }
  },
  mounted() {
    this.activeChat();
  }
})

// import chatComponent from './chatComponent.js';
//
// document.addEventListener("DOMContentLoaded", () => {
//   const data = {
//     stories: [
//       {
//         imageUrl: 'intro1',
//         text: ["매달 마지막 주 목요일에 프론트엔드 반은 쪽지시험을 본다.", "지난 시험에 10점을 맞은 H군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다."],
//       },
//       {
//         imageUrl: 'intro2',
//         text: ["문은 잠겨있다.", "옆 24시 감자탕 집을 통해 들어간다."],
//       },
//       {
//         imageUrl: 'intro3',
//         text: ["엘리베이터를 타고 올라간다."],
//       },
//       {
//         imageUrl: 'intro5',
//         text: ["4층을 누른다."],
//       },
//       {
//         imageUrl: 'intro6',
//         text: ["게임설명"],
//       },
//       {
//         imageUrl: 'intro7',
//         text: ["게임설명2"],
//       },
//     ],
//     axtiveIndex: 0
//   }
//   const chat = new chatComponent();
//   chat.init();
// });
