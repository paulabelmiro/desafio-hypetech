import React from 'react'

export default function Header() {
  return (
    <div className="w-full bg-transparent rounded z-10 flex items-center text-xs p-2">
      <h1 className="basis-3/6 flex gap-3 items-center font-bold">#</h1>
      <h1 className="basis-1/6 text-center font-bold">Valor</h1>
      <h1 className="basis-1/6 text-center font-bold">Odd</h1>
      <div className="basis-1/6 text-right font-bold">Lucro</div>
    </div>
  )
}
