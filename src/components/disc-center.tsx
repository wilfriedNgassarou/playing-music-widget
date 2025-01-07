import { motion } from "framer-motion"

export function DiskCenter({ showContent }: { showContent: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ delay: .35, duration: .15 }}             
      style={{ boxShadow: 'inset 0px 0px 40px rgba(0, 0, 0, 0.4)' }}
      className="absolute w-24 h-24 rounded-full border-[1px] border-white bg-gray-300 p-4"
    >
      <div
        style={{ boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.2)' }}
        className="bg-gray-200 h-full w-full rounded-full p-2"
      >
        <div className="w-full h-full rounded-full bg-white p-1">
          <div className="w-full h-full rounded-full bg-gray-100"/>
        </div>
      </div>
    </motion.div>
  )
}