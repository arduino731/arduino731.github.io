'use client'
import React, { useState } from 'react'
import useHandleScroll from '../../hooks/HandleScroll'
import { minimax, checkWinner } from './utils/tttMiniMaxLogic';

export default function TetrisGame({ onBack }) {
  // Use the hook to handle animations if needed
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();
  
  // React State for the board
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // Track whose turn it is
  const [status, setStatus] = useState("Your turn! (O)");

  const scrollToContent = () => {
    const element = document.getElementById('tic-tac-toe-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMove = (index) => {
    // 1. Validation
    if (board[index] || checkWinner(board)) return;

    // 2. Human Move
    const newBoard = [...board];
    newBoard[index] = "O";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setStatus(result === "tie" ? "It's a draw!" : "You won! (Wait, how?)");
      return;
    }

    // 3. AI Turn
    setStatus("AI is thinking...");
    setTimeout(() => {
      simulateAI(newBoard);
    }, 500); // 500ms delay makes it feel more "real"
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setStatus("Your turn! (O)");
    setIsXNext(true);
  };

  const simulateAI = (currentBoard) => {
  let bestScore = -Infinity;
  let move;

  // Loop through all squares to find the best move
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

    if (move !== undefined) {
      const newBoard = [...currentBoard];
      newBoard[move] = "X";
      setBoard(newBoard);

      // Check if AI won after its move
      const finalResult = checkWinner(newBoard);
      if (finalResult === "X") {
        setStatus("AI wins! Better luck next time.");
      } else if (finalResult === "tie") {
        setStatus("It's a draw!");
      } else {
        setStatus("Your turn! (O)");
      }
    }
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

        <div className="bg-gray-200 p-6 sm:p-10 my-10 rounded-lg shadow-lg fadeIn">
          <div className="flex flex-col items-center justify-center bg-white p-8 border-4 border-gray-400 rounded-lg shadow-inner min-h-[450px]">
            
            <div className="mb-4 text-xl font-bold text-gray-700 h-8 tracking-wide">
              {status}
            </div>

            {/* The Board */}
            {/* The Board - Switched to Grid for better stability */}
            <div className="grid grid-cols-3 w-72 h-72 bg-gray-300 rounded-md overflow-hidden shadow-md border-2 border-gray-400">
              {board.map((cell, i) => (
                <div 
                  key={i}
                  onClick={() => handleMove(i)}
                  // Removed w-24 h-24 and used h-full/w-full to let the grid decide the size
                  className={`flex items-center justify-center w-full h-full border border-gray-300 text-4xl font-black cursor-pointer transition-all
                    ${!cell ? 'hover:bg-gray-100 bg-white' : 'bg-gray-50'}
                    ${cell === 'X' ? 'text-red-500' : 'text-blue-500'}`}
                >
                  {cell}
                </div>
              ))}
            </div>

            <button 
              onClick={resetGame}
              className="mt-8 px-10 py-3 bg-slate-800 hover:bg-black text-white rounded-full font-bold transition-transform active:scale-95 shadow-lg"
            >
              Reset Challenge
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}