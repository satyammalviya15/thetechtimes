import React, { useState, useEffect, useRef } from "react";
import { Puzzle, Trophy, Calendar, CheckCircle2, RotateCcw, Timer, Lightbulb, Zap, Info, RefreshCw } from "lucide-react";

const GRID_SIZE = 5;

const PUZZLE_LIBRARY = [
  {
    id: 1,
    name: "Web Dev Basics",
    solution: [
      ["R", "E", "A", "C", "T"],
      ["O", "B", "J", "E", "C"],
      ["B", "O", "T", "S", "P"],
      ["O", "T", "O", "T", "U"],
      ["T", "E", "C", "H", "S"]
    ],
    clues: {
      across: [
        { num: 1, text: "Popular JavaScript library for building UIs.", r: 0, c: 0 },
        { num: 2, text: "Instance of a class in OOP logic.", r: 1, c: 0 },
        { num: 3, text: "Automated scripts crawling the web.", r: 2, c: 0 },
        { num: 4, text: "Modern abbreviation for Technology.", r: 4, c: 0 }
      ],
      down: [
        { num: 1, text: "The 'R' in ROBOT - a mechanical being.", r: 0, c: 0 },
        { num: 2, text: "The 'E' in E-mail - electronic systems.", r: 0, c: 1 },
        { num: 3, text: "Popular shortcut for 'Central Processing Unit'.", r: 0, c: 3 }
      ]
    },
    numbers: [
      { r: 0, c: 0, val: "1" }, { r: 1, c: 0, val: "2" }, { r: 2, c: 0, val: "3" },
      { r: 4, c: 0, val: "4" }, { r: 0, c: 1, val: "2D" }, { r: 0, c: 3, val: "3D" }
    ]
  },
  {
    id: 2,
    name: "Cloud & Security",
    solution: [
      ["C", "L", "O", "U", "D"],
      ["Y", "B", "E", "R", "N"],
      ["B", "O", "D", "E", "S"],
      ["E", "X", "I", "S", "T"],
      ["S", "T", "A", "T", "S"]
    ],
    clues: {
      across: [
        { num: 1, text: "Computing over the internet.", r: 0, c: 0 },
        { num: 2, text: "Prefix for internet security (CYBER).", r: 1, c: 0 },
        { num: 3, text: "Network points or cluster units.", r: 2, c: 0 },
        { num: 4, text: "Usage data and analytics (abbr).", r: 4, c: 0 }
      ],
      down: [
        { num: 1, text: "Cyber ____ - the prefix in security.", r: 0, c: 0 },
        { num: 2, text: "To load or boot up a system.", r: 0, c: 1 },
        { num: 3, text: "Input-Output operations (abbr).", r: 0, c: 2 }
      ]
    },
    numbers: [
      { r: 0, c: 0, val: "1" }, { r: 1, c: 0, val: "2" }, { r: 2, c: 0, val: "3" },
      { r: 4, c: 0, val: "4" }, { r: 0, c: 1, val: "2D" }, { r: 0, c: 2, val: "3D" }
    ]
  },
  {
    id: 3,
    name: "Core Systems",
    solution: [
      ["L", "I", "N", "U", "X"],
      ["S", "H", "E", "L", "L"],
      ["S", "W", "I", "F", "T"],
      ["K", "E", "R", "N", "L"],
      ["B", "A", "S", "I", "C"]
    ],
    clues: {
      across: [
        { num: 1, text: "The world's most popular open-source kernel.", r: 0, c: 0 },
        { num: 2, text: "Command-line interface environment.", r: 1, c: 0 },
        { num: 3, text: "Apple's language for iOS development.", r: 2, c: 0 },
        { num: 4, text: "The core part of an OS (vowel missing).", r: 3, c: 0 }
      ],
      down: [
        { num: 1, text: "The 'L' in LINUX.", r: 0, c: 0 },
        { num: 2, text: "The 'H' in SHELL - to hide or protect.", r: 1, c: 1 },
        { num: 3, text: "High-level language: ____ Visual (abbr).", r: 0, c: 3 }
      ]
    },
    numbers: [
      { r: 0, c: 0, val: "1" }, { r: 1, c: 0, val: "2" }, { r: 2, c: 0, val: "3" },
      { r: 3, c: 0, val: "4" }, { r: 1, c: 1, val: "2D" }, { r: 0, c: 3, val: "3D" }
    ]
  }
];

const Crossword = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(PUZZLE_LIBRARY[0]);
  const [grid, setGrid] = useState(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill("")));
  const [focusedCell, setFocusedCell] = useState({ r: 0, c: 0 });
  const [direction, setDirection] = useState("across"); // across, down
  const [status, setStatus] = useState("playing"); // playing, won, error
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  // Load random puzzle
  const loadNewPuzzle = () => {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * PUZZLE_LIBRARY.length);
    } while (PUZZLE_LIBRARY[nextIdx].id === currentPuzzle.id);
    
    setCurrentPuzzle(PUZZLE_LIBRARY[nextIdx]);
    resetPuzzle();
  };

  // Timer logic
  useEffect(() => {
    if (isActive && status === "playing") {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, status]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleInput = (r, c, val) => {
    if (status === "won") return;
    if (!isActive) setIsActive(true);

    const char = val.toUpperCase().slice(-1);
    const newGrid = [...grid];
    newGrid[r][c] = char;
    setGrid(newGrid);

    if (char) {
      moveFocus(r, c, 1);
    }
  };

  const moveFocus = (r, c, offset) => {
    if (direction === "across") {
      const nextC = c + offset;
      if (nextC >= 0 && nextC < GRID_SIZE) {
        setFocusedCell({ r, c: nextC });
      }
    } else {
      const nextR = r + offset;
      if (nextR >= 0 && nextR < GRID_SIZE) {
        setFocusedCell({ r: nextR, c });
      }
    }
  };

  const handleKeyDown = (e, r, c) => {
    if (e.key === "Backspace") {
      if (!grid[r][c]) {
        moveFocus(r, c, -1);
      }
    } else if (e.key === " ") {
      e.preventDefault();
      setDirection((prev) => (prev === "across" ? "down" : "across"));
    } else if (e.key.startsWith("Arrow")) {
       const key = e.key.replace("Arrow", "");
       if (key === "Right" && c < GRID_SIZE - 1) setFocusedCell({ r, c: c + 1 });
       if (key === "Left" && c > 0) setFocusedCell({ r, c: c - 1 });
       if (key === "Down" && r < GRID_SIZE - 1) setFocusedCell({ r: r + 1, c });
       if (key === "Up" && r > 0) setFocusedCell({ r: r - 1, c });
    }
  };

  const revealLetter = () => {
    const { r, c } = focusedCell;
    const newGrid = [...grid];
    newGrid[r][c] = currentPuzzle.solution[r][c];
    setGrid(newGrid);
  };

  const checkPuzzle = () => {
    let isCorrect = true;
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (grid[r][c] !== currentPuzzle.solution[r][c]) {
          isCorrect = false;
          break;
        }
      }
    }
    setStatus(isCorrect ? "won" : "error");
  };

  const resetPuzzle = () => {
    setGrid(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill("")));
    setFocusedCell({ r: 0, c: 0 });
    setStatus("playing");
    setTime(0);
    setIsActive(false);
    setDirection("across");
  };

  const isHighlighted = (r, c) => {
    if (direction === "across" && r === focusedCell.r) return true;
    if (direction === "down" && c === focusedCell.c) return true;
    return false;
  };

  const jumpToClue = (clue, dir) => {
    setFocusedCell({ r: clue.r, c: clue.c });
    setDirection(dir);
    if (!isActive) setIsActive(true);
  };

  useEffect(() => {
    const { r, c } = focusedCell;
    inputRefs.current[r * GRID_SIZE + c]?.focus();
  }, [focusedCell]);

  return (
    <div className="container py-5">
      {/* Header with Timer */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
        <div className="text-center text-md-start">
          <h1 className="fw-bold display-4 mb-0 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
             <Puzzle size={48} className="text-primary animate-float" /> The Daily Crossword
          </h1>
          <p className="lead text-muted mb-0">Solving: <span className="text-dark fw-bold">{currentPuzzle.name}</span></p>
        </div>
        <div className="bg-dark text-white px-4 py-3 rounded-4 shadow d-flex align-items-center gap-3 timer-box">
          <Timer size={24} className={isActive ? "animate-pulse text-warning" : ""} />
          <span className="fs-3 fw-mono">{formatTime(time)}</span>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Game Area */}
        <div className="col-lg-7">
           <div className="bg-white p-4 p-md-5 rounded-5 shadow-lg border main-puzzle-card">
              <div className="mx-auto" style={{ maxWidth: "420px" }}>
                 <div className="d-flex justify-content-between mb-3 px-1">
                    <span className="badge bg-primary rounded-pill px-3">Direction: {direction.toUpperCase()}</span>
                    <span className="small text-muted pointer" onClick={() => setDirection(d => d === 'across' ? 'down' : 'across')}>
                       Press <kbd className="bg-light text-dark border shadow-sm">Space</kbd> to toggle
                    </span>
                 </div>

                 <div className="crossword-grid mb-4">
                    {grid.map((row, r) => (
                      row.map((cell, c) => (
                        <div key={`${r}-${c}`} className={`cell-container position-relative`}>
                           <input
                             ref={(el) => (inputRefs.current[r * GRID_SIZE + c] = el)}
                             type="text"
                             className={`crossword-input 
                                ${focusedCell.r === r && focusedCell.c === c ? 'focused' : ''} 
                                ${isHighlighted(r, c) ? 'highlighted' : ''}
                                ${status === 'error' && grid[r][c] !== currentPuzzle.solution[r][c] && grid[r][c] !== "" ? 'is-invalid' : ''} 
                                ${status === 'won' ? 'is-valid' : ''}`}
                             value={cell}
                             onChange={(e) => handleInput(r, c, e.target.value)}
                             onKeyDown={(e) => handleKeyDown(e, r, c)}
                             onFocus={() => { setFocusedCell({ r, c }); setIsActive(true); }}
                             maxLength={1}
                           />
                           {/* Numbers in cells */}
                           {currentPuzzle.numbers.map((n, i) => (
                             n.r === r && n.c === c && <span key={i} className="cell-num">{n.val}</span>
                           ))}
                        </div>
                      ))
                    ))}
                 </div>

                 <div className="d-flex flex-wrap gap-2">
                    <button onClick={checkPuzzle} className="btn btn-primary flex-grow-1 py-3 fw-bold rounded-pill shadow-sm hover-scale">
                       <CheckCircle2 size={20} className="me-2" /> CHECK PUZZLE
                    </button>
                    <button onClick={loadNewPuzzle} className="btn btn-dark px-4 rounded-pill shadow-sm" title="New Random Puzzle">
                       <RefreshCw size={20} className={status === 'won' ? 'animate-spin' : ''} />
                    </button>
                    <button onClick={revealLetter} className="btn btn-warning px-4 rounded-pill shadow-sm" title="Reveal Letter">
                       <Lightbulb size={20} />
                    </button>
                    <button onClick={resetPuzzle} className="btn btn-outline-secondary px-4 rounded-pill shadow-sm">
                       <RotateCcw size={20} />
                    </button>
                 </div>

                 {status === "won" && (
                   <div className="alert alert-success mt-4 animate-win text-center py-4 rounded-4 border-0 shadow">
                      <Zap size={40} className="mb-2 text-warning" />
                      <div>🎉 <strong>VICTORY!</strong> You solved it in {formatTime(time)}!</div>
                      <button onClick={loadNewPuzzle} className="btn btn-success btn-sm mt-3 px-4 rounded-pill shadow-sm">NEXT PUZZLE &rarr;</button>
                   </div>
                 )}
              </div>
           </div>
        </div>
        
        {/* Clue Area */}
        <div className="col-lg-5">
           <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-light clue-card">
              <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-2">
                 <Info size={20} className="text-secondary" />
                 <h5 className="fw-bold m-0">Daily Clues</h5>
              </div>
              
              <div className="mb-4">
                 <h6 className="clue-header across">ACROSS</h6>
                 <ul className="list-unstyled clue-list">
                    {currentPuzzle.clues.across.map((clue, i) => (
                      <li key={i} className={`p-2 rounded-3 pointer hover-bg-light ${focusedCell.r === clue.r && direction === 'across' ? 'active-clue' : ''}`} onClick={() => jumpToClue(clue, 'across')}>
                         <strong>{clue.num}.</strong> {clue.text}
                      </li>
                    ))}
                 </ul>
              </div>
              
              <div>
                 <h6 className="clue-header down">DOWN</h6>
                 <ul className="list-unstyled clue-list">
                    {currentPuzzle.clues.down.map((clue, i) => (
                      <li key={i} className={`p-2 rounded-3 pointer hover-bg-light ${focusedCell.c === clue.c && direction === 'down' ? 'active-clue' : ''}`} onClick={() => jumpToClue(clue, 'down')}>
                         <strong>{clue.num}.</strong> {clue.text}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           <div className="card border-0 shadow-lg p-4 rounded-4 bg-primary text-white premium-score-card overflow-hidden position-relative">
              <div className="position-absolute top-0 end-0 p-4 opacity-10 rotate-12">
                 <Trophy size={120} />
              </div>
              <h5 className="fw-bold mb-4 d-flex align-items-center position-relative z-1">
                 <Trophy size={20} className="me-2 text-warning" /> Live Rankings
              </h5>
              <div className="list-group list-group-flush bg-transparent position-relative z-1">
                 <div className="list-group-item bg-transparent text-white border-white border-opacity-25 px-0 d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center gap-3">
                       <span className="fw-bold fs-5 opacity-50">01</span>
                       <span>TechWiz_99</span>
                    </div>
                    <span className="badge bg-white text-primary rounded-pill">02:34</span>
                 </div>
                 <div className="list-group-item bg-transparent text-white border-white border-opacity-25 px-0 d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center gap-3">
                       <span className="fw-bold fs-5 opacity-50">02</span>
                       <span>CodeMaster</span>
                    </div>
                    <span className="badge bg-white text-primary rounded-pill">03:10</span>
                 </div>
                 <div className="list-group-item bg-transparent text-white border-0 px-0 d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center gap-3">
                       <span className="fw-bold fs-5 opacity-50">03</span>
                       <span>BinaryBeast</span>
                    </div>
                    <span className="badge bg-white text-primary rounded-pill">03:45</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <style jsx>{`
        .fw-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }
        .crossword-grid {
           display: grid;
           grid-template-columns: repeat(5, 1fr);
           gap: 10px;
        }
        .cell-container { aspect-ratio: 1; perspective: 1000px; }
        .crossword-input {
           width: 100%;
           height: 100%;
           border: 3px solid #f1f3f5;
           border-radius: 12px;
           text-align: center;
           font-size: 1.8rem;
           font-weight: 800;
           transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
           outline: none;
           background: #fff;
           box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }
        .crossword-input.focused {
           border-color: #0d6efd;
           background-color: #fff;
           transform: scale(1.05);
           box-shadow: 0 10px 20px rgba(13, 110, 253, 0.15);
           z-index: 10;
        }
        .crossword-input.highlighted { background-color: #f0f7ff; }
        .crossword-input.is-invalid { border-color: #ff8787; color: #fa5252; background: #fff5f5; }
        .crossword-input.is-valid { border-color: #69db7c; color: #2b8a3e; background: #f4fce3; animation: cellPop 0.4s ease-out forwards; }
        
        .cell-num {
           position: absolute;
           top: 6px;
           left: 10px;
           font-size: 0.7rem;
           font-weight: 900;
           color: #adb5bd;
           pointer-events: none;
           text-shadow: 0 1px 0 #fff;
        }

        .clue-header { 
           font-size: 0.8rem; 
           font-weight: 900; 
           letter-spacing: 1px; 
           padding-left: 10px; 
           border-left: 4px solid #ced4da; 
           margin-bottom: 1rem;
        }
        .clue-header.across { border-color: #0d6efd; color: #0d6efd; }
        .clue-header.down { border-color: #198754; color: #198754; }
        
        .clue-list li { transition: all 0.2s; border: 1px solid transparent; }
        .clue-list li:hover { background: #fff; border-color: #dee2e6; transform: translateX(5px); }
        .active-clue { background: #fff !important; border-color: #0d6efd !important; box-shadow: 0 4px 12px rgba(0,0,0,0.05); font-weight: 600; }

        .timer-box { transition: all 0.3s; }
        .timer-box:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important; }

        .hover-scale:hover { transform: scale(1.02); }
        .rotate-12 { transform: rotate(12deg); }

        @keyframes animate-float { 
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        .animate-float { animation: animate-float 3s ease-in-out infinite; }
        
        @keyframes cellPop {
           0% { transform: scale(1); }
           50% { transform: scale(1.1); }
           100% { transform: scale(1); }
        }

        .animate-win {
           animation: winSlideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes winSlideUp {
           from { opacity: 0; transform: translateY(30px); }
           to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Crossword;
