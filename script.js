// Initial Data 
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',       
};
let player = '';
let warning = '';
let playing = false;

reset();

// Events 
document.querySelector('.reset').addEventListener('click', reset);


// Functions
function reset() {
    warning = '';

    let random = Math.floor(Math.random() *2);
    // player = (raondom === 0) ? 'x' : 'o'; (Mesma coisa que IF/ELSE);
    if(random === 0) {
        player = 'x';
     } else {
         player = 'o';
     }

     for(let i in square){
         square[i] = '';
       }

       playing = true;

       renderSquare();
       renderInfo();
    }

    function renderSquare() {
        for(let i in square) {
            let item = document.querySelector(`div[data-item=${i}]`)
            if(square[i] !== '') {
                item.innerHTML = square[i];
            }else {
                item.innerHTML = '';
            } // Ou apenas usar item.innerHTML = square[i]; Ao invés das condições IF/ELSE
        }
    }

    function renderInfo() {

    }