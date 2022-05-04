(() => {
  const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const liAll = document.querySelectorAll('.zero');
  const BTN_SUCCESS = document.getElementById('btn');
  let liId = document.getElementById('');
  const arrOpenCards = [];
  const arrComplete = [];

  // Перемешивание массива с цифрами
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  shuffle(arr);
  console.log(arr);

  // Присваивание к id значение
  const idApp = () => {
    for (let i = '1', x = 0; i <= 16 || x <= 15; i++, x++) {
      liId = document.getElementById(i);
      liId.textContent = arr[x];
    }
  };
  idApp();

  // Таймер
  const number = document.querySelector('.number');

  function timer() {
    if (parseInt(number.textContent, 10) >= 1) {
      number.textContent -= 1;
    } else {
      alert('Попробуй сначала');
      number.textContent = 60;

      for (let y = '1'; y <= 16; y++) {
        liId = document.getElementById(y);
        liId.classList.remove('open');
        liId.classList.remove('complete');
        liId.classList.add('zero');
      }

      shuffle(arr);
      console.log(arr);
      idApp();

      arrComplete.length = 0;
      arrOpenCards.length = 0;
    }
  }
  setInterval(timer, 1000);

  // Переворот карточки при событии

  function name() {
    this.classList.toggle('open');
    this.classList.toggle('zero');

    for (let i = 0; i < this.classList.length; i++) {
      if (this.classList[i] === 'open') {
        arrOpenCards.push(this);
        if (arrOpenCards.length === 2) {
          if (arrOpenCards[0].innerHTML === arrOpenCards[1].innerHTML) {
            arrComplete.push(1);
            for (let x = 0; x < arrOpenCards.length; x++) {
              arrOpenCards[x].classList.add('complete');
            }
            if (arrComplete.length === 8) {
              function alertOne() {
                alert(`Твоё время: ${60 - number.textContent} секунд`);
                number.textContent = 60;
              }

              function setTimeoutCards() {
                for (let y = '1'; y <= 16; y++) {
                  liId = document.getElementById(y);
                  liId.classList.remove('open');
                  liId.classList.remove('complete');
                  liId.classList.add('zero');
                }
                shuffle(arr);
                idApp();
              }
              setTimeout(alertOne, 1000);
              setTimeout(setTimeoutCards, 2000);
              arrComplete.length = 0;
            }
            arrOpenCards.length = 0;
          } else {
            for (let c = 1; c < 17; c++) {
              liId = document.getElementById(c);
              liId.classList.add('close');
            }
            for (let d = 0; d < arrOpenCards.length; d++) {
              function openCards() {
                arrOpenCards[d].classList.add('zero');
                arrOpenCards[d].classList.toggle('open');
              }
              function closeCards() {
                arrOpenCards.length = 0;
                for (let f = 1; f < 17; f++) {
                  liId = document.getElementById(f);
                  liId.classList.remove('close');
                }
              }
              setTimeout(openCards, 700);
              setTimeout(closeCards, 800);
            }
          }
        }
      }
    }
  }

  liAll.forEach((el) => el.addEventListener('click', name));

  // Событие при клике "Начать заново"
  function successFunction() {
    for (let y = '1'; y <= 16; y++) {
      liId = document.getElementById(y);
      liId.classList.remove('open');
      liId.classList.remove('complete');
      liId.classList.add('zero');
    }

    shuffle(arr);
    idApp();

    arrComplete.length = 0;
    arrOpenCards.length = 0;

    number.textContent = 60;
  }
  BTN_SUCCESS.addEventListener('click', successFunction);

  // Уровни сложности
  // const FOUR_BY_FOUR = document.querySelector('#four');
  // const SIX_BY_SIX = document.querySelector('#six');
  // const EIGHT_BY_EIGHT = document.querySelector('#eight');
  // const TEN_BY_TEN = document.querySelector('#ten');
  //
  // SIX_BY_SIX.addEventListener('click', function () {
  //
  //   let ul = document.querySelector('.ul-style');
  //   let li = document.createElement('li');
  //   li.classList.add('zero')
  //   li.id = "17"
  //
  //   console.log(li)
  // })
})();
