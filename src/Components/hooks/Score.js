import React, { useState } from 'react'

const Score = () => {
    const [viratScore, setViratScore] = useState(0);
    const [dhoniScore, setDhoniScore] = useState(0);

  return (
    <>
        <div>Cricket</div>
        <div>Team India:{viratScore + dhoniScore} </div>
        <div>
            <p>Virat Kohli: {viratScore}</p>
            <button onClick={() => setViratScore(viratScore + 1)}>One</button>
            <button onClick={() => setViratScore(viratScore + 2)}>Two</button>
            <button onClick={() => setViratScore(viratScore + 3)}>Three</button>
            <button onClick={() => setViratScore(viratScore + 4)}>Four</button>
            <button onClick={() => setViratScore(viratScore + 6)}>Six</button>

        </div>
        <div>
            <p>MS Dhoni: {dhoniScore}</p>
            <button onClick={() => setDhoniScore(dhoniScore + 1)}>One</button>
            <button onClick={() => setDhoniScore(dhoniScore + 2)}>Two</button>
            <button onClick={() => setDhoniScore(dhoniScore + 3)}>Three</button>
            <button onClick={() => setDhoniScore(dhoniScore + 4)}>Four</button>
            <button onClick={() => setDhoniScore(dhoniScore + 6)}>Six</button>

        </div>
    </>
  )
}

export default Score