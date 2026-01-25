# ❌⭕ AI-Powered Tic-Tac-Toe (Pattern Recognition Engine)

A sophisticated implementation of the classic Tic-Tac-Toe game featuring an "Unbeatable" AI mode. This project demonstrates advanced **Game Theory** logic, **Recursive Algorithms**, and a polished, responsive UI.



---

## 🧠 Technical Highlights

### 1. The Minimax Algorithm
* **Recursive Decision Making:** Implemented the **Minimax Algorithm** to simulate every possible game outcome. The AI assigns scores to paths (+10 for win, -10 for loss, 0 for draw) to ensure it never makes a losing move.
* **Heuristic Evaluation:** The engine effectively balances search depth with performance, providing an instantaneous "Unbeatable" opponent.

### 2. State Management & Logic
* **Functional React:** Leverages `useState` and `useEffect` to manage complex game states, including turn tracking, win-condition validation, and move history.
* **Winning Logic:** Utilizes an optimized array-mapping strategy to check for 8 possible winning combinations across the 3x3 grid.

### 3. Polish & UX
* **Responsive Design:** Built with **Tailwind CSS**, ensuring the game is fully playable across mobile, tablet, and desktop resolutions.
* **Persistent State:** (Optional if you added it) Integrated **LocalStorage** to keep track of the Player vs. AI scoreboards across browser sessions.

---

## 🛠️ Tech Stack

* **React 18** - Component-based UI architecture.
* **Tailwind CSS** - Modern utility-first styling for a sleek, dark-mode aesthetic.
* **JavaScript (ES6+)** - Recursive logic and array manipulation.

---

## 📂 Project Structure

```text
src/
 ├── components/
 │    └── TicTacToe.js    # Game board and UI components
 ├── logic/
 │    └── minimax.js      # Recursive AI decision-making engine
 └── styles/
      └── animations.css  # Smooth transitions for X and O placements