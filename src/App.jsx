import React, { useRef, useState } from "react";
import move from "./assets/move.mp3";
import food from "./assets/food.mp3";
import gameover from "./assets/gameover.mp3";
import music from "./assets/music.mp3";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

function App() {
  let arr = {
    0: move,
    1: food,
    2: gameover,
    3: music,
  };

  const [count, setCount] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">React Music Player</h1>

      <div className="flex justify-center items-center mb-8">
        <img
          src="data:image/jpeg;base64,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" // Replace with the path to your album cover image
          alt="Album Cover"
          className="w-32 h-32 rounded-md mr-6"
        />

        <div>
          <audio
            ref={audioRef}
            src={arr[count]}
            controls
            className=""
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          <h2 className="text-xl font-semibold mb-2">Song Title</h2>
          <p className="text-gray-400">Artist Name</p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-8 gap-2">
        <div
          className="cursor-pointer"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              setIsPlaying(false);
            } else {
              setCount(0);
              setIsPlaying(0);
            }
          }}
        >
          <IoMdArrowDropleftCircle size={39} />
        </div>
        <button
          onClick={handlePlayPause}
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div
          className="cursor-pointer"
          onClick={() => {
            if (count < 3) {
              setCount(count + 1);
              setIsPlaying(false);
            } else {
              setCount(0);
              setIsPlaying(0);
            }
          }}
        >
          <IoMdArrowDroprightCircle size={39} />
        </div>
      </div>
    </div>
  );
}

export default App;
