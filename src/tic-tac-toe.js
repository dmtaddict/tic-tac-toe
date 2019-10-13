class TicTacToe {
    constructor() {
        this.player1 = 'x';
        this.player2 = 'o';
        this.currentPlayer = this.player1;
        this.field = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] === ''){
            this.field[rowIndex][columnIndex] = this.currentPlayer;
        }
        else{
            return this;
        }
        if(this.currentPlayer === this.player1){
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }
    }

    isFinished() {
        return Boolean(this.getWinner()||this.isDraw());
    }

    getWinner() {
        if(((this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2]) && (this.field[0][0] !== ''))||
            ((this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0]) && (this.field[0][0] !== ''))||
            ((this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) && (this.field[0][0] !== '')){
            return this.field[0][0];
        }
        else if(((this.field[1][1] === this.field[0][1]) && (this.field[1][1] === this.field[2][1]) && (this.field[1][1] !== ''))||
            ((this.field[1][1] === this.field[1][0]) && (this.field[1][1] === this.field[1][2]) && (this.field[1][1] !== ''))||
            ((this.field[1][1] === this.field[0][2]) && (this.field[1][1] === this.field[2][0])) && (this.field[1][1] !== '')){
            return this.field[1][1];
        }
        else if(((this.field[2][2] === this.field[2][0]) && (this.field[2][2] === this.field[2][1]) && (this.field[2][2] !== ''))||
            ((this.field[2][2] === this.field[0][2]) && (this.field[2][2] === this.field[1][2])) && (this.field[2][2] !== '')){
            return this.field[2][2];
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        return (this.field[0].indexOf('') === -1) && (this.field[1].indexOf('') === -1) && (this.field[2].indexOf('') === -1);
    }

    isDraw() {
        return !!(this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex] === ''){
            return null;
        }
        else{
            return this.field[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
