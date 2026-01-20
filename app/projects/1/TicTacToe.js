'use client'
import React, { useState, useEffect } from 'react' // Fix 1: Added useEffect
import useHandleScroll from '../../hooks/HandleScroll'
import { minimax, checkWinner } from './utils/tttMiniMaxLogic';

export default function TicTacToeGame({ onBack }) { // Fix 2: Renamed to TicTacToeGame
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("Your turn! (O)");
  const [scores, setScores] = useState({ win: 0, lose: 0, tie: 0 });

  // Load scores from LocalStorage only once on mount
  useEffect(() => {
    const savedScores = localStorage.getItem('tictactoe-scores');
    if (savedScores) setScores(JSON.parse(savedScores));
  }, []);

  // Save scores to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tictactoe-scores', JSON.stringify(scores));
  }, [scores]);

  const handleMove = (index) => {
    if (board[index] || checkWinner(board) || status.includes("thinking")) return;

    const newBoard = [...board];
    newBoard[index] = "O";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      handleGameOver(result);
      return;
    }

    setStatus("AI is thinking...");
    setTimeout(() => {
      const aiMove = getBestMove(newBoard);
      if (aiMove !== undefined) {
        const boardAfterAI = [...newBoard];
        boardAfterAI[aiMove] = "X";
        setBoard(boardAfterAI);
        
        const finalResult = checkWinner(boardAfterAI);
        if (finalResult) {
          handleGameOver(finalResult);
        } else {
          setStatus("Your turn! (O)");
        }
      }
    }, 500);
  };

  const getBestMove = (currentBoard) => {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        currentBoard[i] = "X";
        let score = minimax(currentBoard, 0, false);
        currentBoard[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const handleGameOver = (result) => {
    if (result === "O") {
      setStatus("You won! (Impossible!)");
      setScores(prev => ({ ...prev, win: prev.win + 1 }));
    } else if (result === "X") {
      setStatus("AI wins! Better luck next time.");
      setScores(prev => ({ ...prev, lose: prev.lose + 1 }));
    } else {
      setStatus("It's a draw!");
      setScores(prev => ({ ...prev, tie: prev.tie + 1 }));
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setStatus("Your turn! (O)");
  };

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* ... (Existing Back and Scroll Buttons) ... */}

      <div className="flex flex-col items-center justify-center bg-white p-8 border-4 border-gray-400 rounded-lg shadow-inner min-h-[500px] mt-10">
        
        {/* SCOREBOARD UI */}
        <div className="flex justify-between w-full max-w-72 mb-6 gap-2 text-black">
          <div className="flex-1 bg-blue-100 p-2 rounded-lg text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase text-blue-600">Player</p>
            <p className="text-xl font-black">{scores.win}</p>
          </div>
          <div className="flex-1 bg-gray-100 p-2 rounded-lg text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase text-gray-500">Draw</p>
            <p className="text-xl font-black">{scores.tie}</p>
          </div>
          <div className="flex-1 bg-red-100 p-2 rounded-lg text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase text-red-600">AI</p>
            <p className="text-xl font-black">{scores.lose}</p>
          </div>
        </div>

        <div className="mb-4 text-xl font-bold text-gray-700 h-8 text-center">{status}</div>

        <div className="grid grid-cols-3 w-72 h-72 bg-gray-300 rounded-md overflow-hidden shadow-md border-2 border-gray-400">
          {board.map((cell, i) => (
            <div 
              key={i}
              onClick={() => handleMove(i)}
              className={`flex items-center justify-center w-full h-full border border-gray-300 text-4xl font-black cursor-pointer transition-all
                ${!cell ? 'hover:bg-gray-100 bg-white' : 'bg-gray-50'}
                ${cell === 'X' ? 'text-red-500' : 'text-blue-500'}`}
            >
              {cell}
            </div>
          ))}
        </div>

        <button onClick={resetGame} className="mt-8 px-10 py-3 bg-slate-800 hover:bg-black text-white rounded-full font-bold transition-transform active:scale-95 shadow-lg">
          Reset Board
        </button>
        
        <button 
          onClick={() => { if(confirm("Clear scores?")) setScores({win:0, lose:0, tie:0}) }}
          className="mt-4 text-xs text-gray-400 hover:text-red-500 underline"
        >
          Reset All-Time Stats
        </button>
      </div>
    </article>
  );
}