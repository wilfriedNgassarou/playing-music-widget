import { CSSProperties } from "react";
import { music } from "../data/music";
import { formatDuration } from "../utils/formatDuration";

export function MusicPlayerLegend({ playingTime }: { playingTime: number }) {
  const formatedPlayingTime = formatDuration(playingTime)
  const formatedDuration = formatDuration(music.duration) ;
  
  const bars = Array(5).fill(0) ;

  return (
    <div className="h-36 w-full flex flex-col justify-between py-4 items-center">
      <div className="h-5 w-full flex justify-center items-center gap-1">
        {
          bars.map((_, index) => (
            <div
              key={index} 
              className="h-full w-[2px] animation-play bg-slate-500 rounded-full"
              style={{
                animationDelay: index == 1 || index == 3 ? '.5s' : '0s',
                animationPlayState: playingTime >= music.duration ? 'paused' : 'running' 
              }}
            />
          ))
        }
      </div>
      <h2 className="font-medium text-gray-500">{music.title}</h2>
      <h1>{music.artist}</h1>
      <div className="h-[2px] w-9 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ "--duration": `${music.duration}s` } as CSSProperties }
          className="w-full h-full bg-gray-700 animation-fill" 
        />
      </div>
      <div className="flex w-full justify-center gap-1">
        <span>{formatedPlayingTime}</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">{formatedDuration}</span>
      </div>
    </div>
  )
}