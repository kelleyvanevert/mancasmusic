import { useEffect, useState } from "react";
import axios from "axios";
import { PlayingIcon } from "../components/PlayingIcon";
import { MancaPlayingData } from "../lib/types";

export default function Home() {
  const [data, setData] = useState<MancaPlayingData>();

  useEffect(() => {
    let t: any;

    const task = async () => {
      const res = await axios.get("/api/bla");
      setData(res.data);

      setTimeout(task, 5000);
    };

    task();

    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center xl:text-lg text-black text-opacity-50">
        What's Manca playing, you ask?
      </div>
      {data ? (
        <div>
          <div className="text-center mt-5 mb-2 text-4xl xl:text-6xl font-extrabold text-[#7262f1]">
            <PlayingIcon /> {data.track.name}
          </div>
          <div className="text-center text-lg xl:text-2xl font-semibold text-black text-opacity-70">
            {data.track.artist.name}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5 mb-2 text-6xl font-extrabold text-[#7262f1]">
          Wait a sec...
        </div>
      )}
    </div>
  );
}
