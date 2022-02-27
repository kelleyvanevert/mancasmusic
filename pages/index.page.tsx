import { PlayingIcon } from "../components/PlayingIcon";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center text-lg text-black text-opacity-50">
        What's Manca playing, you ask?
      </div>
      <div className="text-center mt-5 mb-2 text-6xl font-extrabold text-[#7262f1]">
        <PlayingIcon /> Cello Sonata in G Minor, Op. 65: III. Largo
      </div>
      <div className="text-center text-2xl font-semibold text-black text-opacity-70">
        Frédéric Chopin • Emmanuelle Bertrand • Pascal Amoyel
      </div>
    </div>
  );
}
