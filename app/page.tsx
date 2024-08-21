//hooks
import Image from "next/image";
import Link from "next/link";

//images
import MainMenuBg from "@/public/assets/background/MainMenuBg.webp";

export default function MainMenuPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={MainMenuBg}
        alt="Main Menu Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-8">
          Monster Slayer RPG
        </h1>
        <div className="flex flex-col space-y-4">
          <Link
            href="/create-character"
            className="bg-blue-500 hover:bg-blue-600 tansition duration-200 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
          >
            <button>Play</button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-600 tansition duration-200 text-white font-bold py-2 px-4 rounded">
            Options
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 tansition duration-200 text-white font-bold py-2 px-4 rounded">
            Credits
          </button>
        </div>
      </div>
    </div>
  );
}
