import React, { useEffect, useState } from 'react'

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null))

  useEffect(() => {
    // console.log(board);
    checkWinner()
    if(pWin){
      console.log(pWin);
    }
  }, [board])

  const resetGame = () => {
    setPWin('')
    setBoard(Array(9).fill(null))
  }

  const handleMove = (index) => {
    if(pWin) return
    if (board[index]) return;
    const newBoard = [...board]
    newBoard[index] = player ? 'X' : 'O'
    setBoard(newBoard)
    setPlayer(!player)
  }

  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    win.forEach((pattern) => {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(`${board[a]} wins`);
        if(board[a] === 'X'){
          setPWin('X')
        } else {
          setPWin('O')
        }
      }
    })
  }

  const [pWin, setPWin] = useState()
  const [player, setPlayer] = useState(true)

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-amber-500'>
      <div className='w-[85%] max-w-[550px] lg:max-w-[1100px] min-w-[350px] h-[65%] md:h-[90%] max-h-[1000px] min-h-[550px] bg-zinc-800 rounded-2xl grid grid-rows-8 lg:grid-rows-7 lg:grid-cols-8'>
        <div className='lg:col-span-5 lg:row-span-7 row-span-5 w-full grid grid-cols-3 grid-rows-3 p-3'>
          {board.map((elem, i) => (
            <div key={i} className='bg-amber-500 w-[90%] h-[90%] self-center place-self-center flex justify-center items-center text-6xl lg:text-8xl text-zinc-800 font-bold' onClick={() => handleMove(i)}>{elem}</div>
          ))}
        </div>
        <div className='lg:col-span-3 lg:row-span-7 row-span-3 flex flex-col gap-3 items-center w-full h-full justify-between p-5 lg:pb-10'>
          {pWin ? <h1 className='text-white lg:text-4xl text-3xl font-semibold lg:mt-15'>Player {pWin} wins!</h1>  : <h1></h1>}
          {pWin ? <button className='w-max bg-amber-500 px-3 py-1 rounded-lg lg:text-lg text-zinc-900 font-semibold active:bg-amber-600' onClick={() => resetGame()}>Play again</button> : <button className='bg-amber-500 px-4 py-1 rounded-md lg:text-xl text-xl text-zinc-900 font-semibold active:bg-amber-600 w-max' onClick={() => resetGame()}>Reset game</button>}
        </div>
      </div>
    </div>
  )
}

export default App