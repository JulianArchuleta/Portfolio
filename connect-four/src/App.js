// ----------------The board must be 6 rows and 7 columns. 
// Clicking in any column "drops" a user's tile into that column, if an open spot exists. If not open spot exists, the user's click does nothing.
// ----------------Detects a 4 in a row situation horizontally, vertically, and diagonally. Displays the winner. Users can't keep playing if there is a winner.
// ----------------Detects if the game ends in a tie.
// ----------------Properly switches to the other player when a tile placement completes.


//     col0    col2    col4    col6
//         col1    col3    col5   

// row0   0   1   2   3   4   5   6
// row1   7   8   9  10  11  12  13
// row2  14  15  16  17  18  19  20
// row3  21  22  23  24  25  26  27
// row4  28  29  30  31  32  33  34
// row5  35  36  37  38  39  40  41
import { useState } from "react";


function Square({value, onSquareClick}){      
    return (
    <button 
     className= "square"
     onClick={onSquareClick}
     

     >
        {value}
     </button>)
}
export default function Board(){
    const [RedIsNext, setRedIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(42).fill(null));

    function handleClick(i){        
        let col = i%7;        
        const nextSquares = squares.slice(); 
        let emptySpotFound = false;
        let emptySpotIndex = -1;     
        while(calculateWinner(squares)){
            
        }
        // Search entire column to see if there is an empty spot
        
        for (let j = 5; j > -1; j--) {
            if (!squares[j*7 + col]) {
                emptySpotFound = true;
                emptySpotIndex = j*7 + col;
                break;
            }
        }
    
        if (emptySpotFound) {
            if(RedIsNext){
                nextSquares[emptySpotIndex] = "X";   
                             
            }else{
                nextSquares[emptySpotIndex] = "O";
            }
            setSquares(nextSquares);
            setRedIsNext(!RedIsNext);
        } else {
            return;
        }
    }        
        
        // if(squares[i] || calculateWinner(squares)){
        //     return;
        // }
        // if(RedIsNext){
        //     nextSquares[i] = "X";
        // }else{
        //     nextSquares[i] = "O";
        // } 
        // setSquares(nextSquares);
        // setRedIsNext(!RedIsNext);
    
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner: " + winner;
    }else{
        status = "Next player: " + (RedIsNext ? "X" : "O");
    }
    //add a tie condition
    if(!winner && !squares.includes(null)){
        status = "Tie";
    }

    return (
    <>
        <h1>Connect Four</h1>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value ={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value ={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value ={squares[2]} onSquareClick={() => handleClick(2)}/>
            <Square value ={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value ={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value ={squares[5]} onSquareClick={() => handleClick(5)}/>
            <Square value ={squares[6]} onSquareClick={() => handleClick(6)}/>
        </div>
        <div className="board-row">
           <Square value ={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value ={squares[8]} onSquareClick={() => handleClick(8)}/>
            <Square value ={squares[9]} onSquareClick={() => handleClick(9)}/>
            <Square value ={squares[10]} onSquareClick={() => handleClick(10)}/>
            <Square value ={squares[11]} onSquareClick={() => handleClick(11)}/>
            <Square value ={squares[12]} onSquareClick={() => handleClick(12)}/>
            <Square value ={squares[13]} onSquareClick={() => handleClick(13)}/>
        </div>
        <div className="board-row">
            <Square value ={squares[14]} onSquareClick={() => handleClick(14)}/>
            <Square value ={squares[15]} onSquareClick={() => handleClick(15)}/>
            <Square value ={squares[16]} onSquareClick={() => handleClick(16)}/>
            <Square value ={squares[17]} onSquareClick={() => handleClick(17)}/>
            <Square value ={squares[18]} onSquareClick={() => handleClick(18)}/>
            <Square value ={squares[19]} onSquareClick={() => handleClick(19)}/>
            <Square value ={squares[20]} onSquareClick={() => handleClick(20)}/>
        </div>
        <div className="board-row">
            <Square value ={squares[21]} onSquareClick={() => handleClick(21)}/>
            <Square value ={squares[22]} onSquareClick={() => handleClick(22)}/>
            <Square value ={squares[23]} onSquareClick={() => handleClick(23)}/>
            <Square value ={squares[24]} onSquareClick={() => handleClick(24)}/>
            <Square value ={squares[25]} onSquareClick={() => handleClick(25)}/>
            <Square value ={squares[26]} onSquareClick={() => handleClick(26)}/>
            <Square value ={squares[27]} onSquareClick={() => handleClick(27)}/>
        </div>
        <div className="board-row">
            <Square value ={squares[28]} onSquareClick={() => handleClick(28)}/>
            <Square value ={squares[29]} onSquareClick={() => handleClick(29)}/>
            <Square value ={squares[30]} onSquareClick={() => handleClick(30)}/>
            <Square value ={squares[31]} onSquareClick={() => handleClick(31)}/>
            <Square value ={squares[32]} onSquareClick={() => handleClick(32)}/>
            <Square value ={squares[33]} onSquareClick={() => handleClick(33)}/>
            <Square value ={squares[34]} onSquareClick={() => handleClick(34)}/>
        </div>
        <div className="board-row">
            <Square value ={squares[35]} onSquareClick={() => handleClick(35)}/>
            <Square value ={squares[36]} onSquareClick={() => handleClick(36)}/>
            <Square value ={squares[37]} onSquareClick={() => handleClick(37)}/>
            <Square value ={squares[38]} onSquareClick={() => handleClick(38)}/>
            <Square value ={squares[39]} onSquareClick={() => handleClick(39)}/>
            <Square value ={squares[40]} onSquareClick={() => handleClick(40)}/>
            <Square value ={squares[41]} onSquareClick={() => handleClick(41)}/>
        </div>    
    </> 
    );   
}


function calculateWinner(squares){
    //TODO: Add logic for winning
    //Horizontal
    for(let row = 0; row < 6; row++){
        for(let col = 0; col < 4; col++){
            if(squares[row*7 + col] && squares[row*7 + col] === squares[row*7 + col + 1] && squares[row*7 + col] === squares[row*7 + col + 2] && squares[row*7 + col] === squares[row*7 + col + 3]){
                return squares[row*7 + col];
            }
        }
    }
    //Vertical
    for(let col = 0; col < 7; col++){
        for(let row = 0; row < 3; row++){
            if(squares[row*7 + col] && squares[row*7 + col] === squares[row*7 + col + 7] && squares[row*7 + col] === squares[row*7 + col + 14] && squares[row*7 + col] === squares[row*7 + col + 21]){
                return squares[row*7 + col];
            }
        }
    }
    //Diagonal
    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 4; col++){
            if(squares[row*7 + col] && squares[row*7 + col] === squares[row*7 + col + 8] && squares[row*7 + col] === squares[row*7 + col + 16] && squares[row*7 + col] === squares[row*7 + col + 24]){
                return squares[row*7 + col];
            }            
        }
    }
    for(let row = 5; row > 2; row--){
        for (let col =  0; col < 4; col++){
            if(squares[row*7 + col] && squares[row*7 + col] === squares[row*7 + col - 6] && squares[row*7 + col] === squares[row*7 + col - 12] && squares[row*7 + col] === squares[row*7 + col - 18]){
                return squares[row*7 + col];
            }            
        }  
    }    
    return null;
}


