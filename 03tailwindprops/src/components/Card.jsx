import React from 'react'

const Card = (props) => {
    console.log("props : ", props);
  return (
    <>
        <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://i.pinimg.com/550x/d1/79/c5/d179c5c424ed339058effcb85c3f0f49.jpg" />
        </div>
        <div class="flex items-center">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Card