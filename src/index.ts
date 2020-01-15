
import './styles.css';

// 1. find the valuable things.

const secretnumber = 6;

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;
squares.forEach(sq => {

    if (currentSquare === secretnumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    const isWinner = that.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');
    }
    that.removeEventListener('click', handleClick);
}

// Once you win, all the other guesses should be marked as losers.
// Maybe make a play again buttun that resets everything.
// if you win, display a message telling that how awesome they are.
// if they lost (YOU PICKED EVERY ONE BUT THE WINNER) they should be told they lose.
