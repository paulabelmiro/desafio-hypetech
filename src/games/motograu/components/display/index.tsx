import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from '@/core/components/progress-bar'
import If from '@/core/components/conditions/if'
import { GameStatus } from '@/core/providers/enums/game-status'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'

type Props = {
  color: string
}

export default function Display({ color }: Props) {
  const { startTimeout, gameStatus, multiplier } =
    useContext<any>(CrashGameContext)

  return (
    <div className="absolute top-[-50px] sm:top-[-90px] pointer-events-none left-0 flex flex-col gap-3 justify-center items-center w-full h-full">
      <If condition={gameStatus == GameStatus.IDLE}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-44">
            <ProgressBar
              max={10}
              value={startTimeout}
              color={color}
            />
          </div>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.RUNNING}>
        <div className="relative flex justify-center items-center">
          <h1 className="text-6xl md:text-6xl lg:text-6xl font-bungee backdrop-blur-sm bg-white/30 rounded-full px-8">
            {multiplier?.toFixed(2)}x
          </h1>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.MAINTENANCE}>
        <div className="relative flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl uppercase lg:text-3xl font-bungee backdrop-blur-sm bg-white/30 rounded-full px-8">
            Em manutenção!
          </h1>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.GAME_OVER}>
      <div className="backdrop-blur-sm bg-white/30 rounded-full px-8">
        <h1 className="text-2xl sm:text-2xl font-bungee uppercase">
          O piloto caiu!
        </h1>
        <h1 className={`text-6xl md:text-6xl lg:text-6xl font-bold font-bungee`}>
          {multiplier.toFixed(2)}x
        </h1>
      </div>
      </If>
    </div>
  )
}
