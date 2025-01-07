import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { music } from "../data/music"

export function DiskFill({ setShowContent }: { setShowContent: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <motion.img
        src={music.cover}
        layoutId="player"
        className="absolute inset-0 z-30 w-full h-full"
      />
      <motion.div
        layout
        onClick={() => setShowContent(true)} 
        className="absolute inset-0 z-30 w-full h-full flex items-end p-10"
      >
        <div className="text-white">
          <motion.h1
            layout="position" 
            layoutId="music-title" 
            className="leading-none font-semibold uppercase text-lg"
          >
            {music.title}
          </motion.h1>
          <motion.h3 
            layout="position"
            layoutId="artist" 
            className="leading-none uppercase text-xs"
          >
            {music.artist}
          </motion.h3>
        </div>
      </motion.div>
    </>
  )
}