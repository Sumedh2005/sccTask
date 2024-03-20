import React from 'react'

function Stayhuman() {
  return (
    <> <div className="c py-10">
        <div className="bg-no-repeat bg-cover flex w-[1480px] h-[800px] bg-[url('./images/stayhuman.png')] bg-med rounded-xl " >
            <div className="mt-60 ml-60 h-[300px] w-[480px] bg-white border-[6px] border-black rounded-xl hover:bg-light1">
                <img className="h-[110px] w-[110px] mt-10 ml-9" src="./images/studios.png"></img>
                <h1 className="ml-9 mt-3 font-bold text-2xl">Humankind Studios</h1>
                <p className="px-9 mt-2 text-base">A creative studio designing the stories, world, and brand of Humankind.</p>
            </div>
            <div className="mt-60 ml-5 h-[300px] w-[480px] bg-white border-[6px] border-black rounded-xl hover:bg-light1">
                <img className="h-[110px] w-[110px] mt-10 ml-9" src="./images/fund.png"></img>
                <h1 className="ml-9 mt-3 font-bold text-2xl">Humankind Fund</h1>
                <p className="px-9 mt-2 text-base">A fund that helps artists conceive their creations free of economic dependesies</p>
            </div>

        </div>
    </div>
      

        </>
  )
}

export default Stayhuman