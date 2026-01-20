'use client'
import React, { useState, useEffect } from 'react'
import useHandleScroll from '../../hooks/HandleScroll'
import { minimax, checkWinner } from './utils/tttMiniMaxLogic';

export default function TicTacToeGame({ onBack }) {
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

  // FIX: Re-adding the missing scrollToContent function
  const scrollToContent = () => {
    const element = document.getElementById('tic-tac-toe-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-[100px] left-1/2 -translate-x-1/2 z-50 shadow-xl hover:scale-110 active:scale-95 bg-white text-black px-6 py-2 rounded-full border border-slate-200 transition-all font-semibold"
      >
        ← Back to Showcase
      </button>

      {/* Bounce Scroll Button */}
      <div className="fixed top-[200px] left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={scrollToContent}
          className={`shadow-xl bg-cyan-500 text-white px-6 py-2 rounded-full transition-all duration-700 animate-bounce
          ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          ↓ Play Now
        </button>
      </div>

      <div className="flex items-center colorBackground pb-2">
        <h1 className="p-4 colorTextOpposite text-3xl md:text-5xl font-medium my-10 w-full text-center">
          Minimax AI Tic-Tac-Toe
        </h1>
      </div>

      <div 
        id="tic-tac-toe-content" 
        className={`scroll-mt-[150px] scrollHandle md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out
          ${!currentSection || currentSection === 'TicTacToeGame' ? 'opacity-100' : 'opacity-0'}`}
        data-id="TicTacToeGame"
      >
        <h2 className="text-2xl font-bold fadeIn">Project Overview</h2>
        <p className="fadeIn mt-4 text-xl leading-relaxed">
          An "Impossible to Win" game built with <strong>React</strong> and the <strong>Minimax Algorithm</strong>. 
          This project demonstrates recursive logic, state management, and optimized UI rendering.
        </p>

        {/* Start of Game Section */}
        <div className="bg-gray-200 p-6 sm:p-10 my-10 rounded-lg shadow-lg fadeIn flex flex-col items-center">
          
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

          {/* The Board */}
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
        {/* End of Game Section */}

        {/* GitHub Link Section */}
        <div className="mx-auto max-w-xl text-center p-6 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold">Minimax AI Tic-Tac-Toe</h4>
          <p className="text-lg">
            🔍 Want to see the logic?
            <br />
            Check out the source on GitHub!
          </p>
          <a
            href="https://github.com/arduino731/arduino731.github.io/blob/main/app/projects/1/TicTacToe.js"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>
      </div>
    </article>
  );
}