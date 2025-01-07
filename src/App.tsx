import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { music } from "./data/music";
import clsx from "clsx";
import { MusicPlayerLegend } from "./components/music-player-legend";
import { DiskCenter } from "./components/disc-center";
import { DiskFill } from "./components/disc-fill";
import { Credits } from "./components/credits";

function App() {
  const [playingTime, setPlayingTime] = useState(0);
  const [showContent, setShowContent] = useState(true) ;

  const [isDiskRotate, setIsDiskRotate] = useState(true)
  
  const intervalId = setTimeout(() => {
    if(playingTime >= music.duration) return clearInterval(intervalId)

    setPlayingTime(playingTime + 1)
  }, 1000);


  return (
    <MotionConfig transition={{ type: 'tween', ease: 'easeOut', duration: .4 }}>
      <section className="w-full h-dvh flex justify-center items-center bg-white">
        <Credits />
        <div 
          style={{ 
            boxShadow: `
              inset 0px 0px 100px rgba(0, 0, 0, 0.1),
              0px 0px 10px rgba(0, 0, 0, 0.1)
            ` 
          }} 
          className="w-80 h-80 relative flex items-end bg-gray-100 overflow-hidden rounded-[60px]"
        >
          <AnimatePresence initial={false}>
            {
              showContent == false ? ( <DiskFill setShowContent={setShowContent} /> )
              :
              (
                <>
                  <motion.img
                    layoutId="player"
                    src={music.cover}
                    onLayoutAnimationComplete={() => setIsDiskRotate(true)}
                    className={clsx(
                      "absolute z-30 left-0 -top-40 w-full h-full", 
                      "flex justify-center items-center",
                      "shadow-2xl shadow-black/50",
                      isDiskRotate ? 'animation-rotate' : ''
                    )}
                    style={{
                      animationPlayState: playingTime >= music.duration ? 'paused' : 'running',
                      borderRadius: 160
                    }}
                  />
                  <div
                    onClick={() => { 
                      setIsDiskRotate(false)
                      setShowContent(false) 
                    }}
                    className="absolute left-0 rounded-full z-40 w-full h-full -top-40 flex justify-center items-center"
                  >
                    <DiskCenter showContent={showContent} />
                    <div className=" absolute inset-0 flex items-end p-12">
                      <div className="text-white">
                        <motion.h1 layoutId="music-title" className="leading-none font-semibold uppercase text-base">{music.title}</motion.h1>
                        <motion.h3 layoutId="artist" className="leading-none uppercase text-[9px]">{music.artist}</motion.h3>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </AnimatePresence>
          <MusicPlayerLegend playingTime={playingTime} />
        </div>
      </section>
    </MotionConfig>
  )
}

export default App
