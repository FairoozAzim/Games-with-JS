document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var count = 0;

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        var tries = document.getElementById('tries')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        count++
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
                //alert('You have clicked the same image!')
        } else if (cardChosen[0] === cardChosen[1]) {
            //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
                //alert('Sorry, try again')
        }
        tries.innerText = count;
        cardChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        console.log(resultDisplay.textContent, cardsWon.length)
            //console.log(cardArray.length / 2)
        if (count >= 15) {
            resultDisplay.textContent = 'Game Over!'
            stopGame();
        }
        if (cardsWon.length == cardArray.length / 2) {
            console.log('Hurray!')
            resultDisplay.textContent = 'Congrats! You won!'
        }

    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }

    function stopGame() {
        var cards = document.getElementById('game-grid')
        cards.style.pointerEvents = 'none';

    }


    createBoard();

})