import React from "react"

import "./Chessboard.css"

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

function Chessboard(){

    let board =[]
    for(let j=horizontalAxis.length; j>0; j--)
    {
        for(let i = 0; i<horizontalAxis.length; i++)
        {
            if(i===0 || i===7 || ((j>2&&j<7)&&(i===1 || i===6)))
            {
                board.push(<span className="tile wall-tile"></span>)
            }
            else if((j%2===0 && i%2===0) || (j%2===1 && i%2===1))
            {
                board.push(<span className="tile light-tile"></span>)
            }
            else
            {   
                board.push(<span className="tile dark-tile"></span>)
            }
        }
    }
    return(
      <div id="chessboard">
      {board}
  
      </div>
    ) 
  }

  export {Chessboard}