const app = new Vue({
  el: '#app',
  data: {
    showChat: false,
  },
  methods: {
    activeChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed('.chat-text', {
        strings: ["", text],
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: (self) => { vm.closeChat(self) },
      });
    },
    closeChat(self) {
      setTimeout(() => {
        this.showChat = false;
        const chatText = document.querySelector('.chat-text');
        chatText.innerText = '';
      }, 1000)
    },
    open() {
      var firQues = prompt('세상에서 가장 지루한 중학교는?')
      var secQues = prompt('창문을 깼는데 피가 안 나오면?')
      var trdQues = prompt('세상에서 가장 가난한 임금은?')
      if (firQues === '로딩중') {
        if (secQues === '윈도우xp') {
          if (trdQues === '최저임금') {
            const LockOpen = new Audio('./sound/lockOpen.mp3')
            LockOpen.play();
            setTimeout(() => {
              alert('자물쇠가 열렸다. 안에는 시험지가 놓여있었다.')
              window.location.href = './ending.html'  
            }, 500)
          }
        }
      } else {
        const Lock = new Audio('./sound/lock.mp3');
        Lock.play();
        setTimeout(() => {
          alert('열리지않는다.');
        }, 200)
      }
    }
  },
  mounted() {
  }
})
