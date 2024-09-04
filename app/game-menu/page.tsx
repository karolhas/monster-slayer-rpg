"use client";

//hooks
import { useState } from "react";
import Link from "next/link";

//components
import PlayerCard from "../../components/PlayerCard";

//icons
import { FaCog, FaInfoCircle } from "react-icons/fa";

const GameMenuPage = () => {
  const [nickname, setNickname] = useState("Nickname");
  const [level, setLevel] = useState(1);
  const [avatar, setAvatar] = useState("/assets/avatars/warrior.webp");
  const [hp, setHp] = useState({ current: 10, max: 10 });
  const [mp, setMp] = useState({ current: 5, max: 5 });
  const [exp, setExp] = useState({ current: 10, max: 100 });
  const [gold, setGold] = useState(1000);

  return (
    <div className="h-screen w-full flex flex-col items-center p-4">
      <div className="w-full max-w-md flex justify-center">
        <PlayerCard
          nickname={nickname}
          level={level}
          avatar={avatar}
          hp={hp}
          mp={mp}
          exp={exp}
          gold={gold}
        />
      </div>
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-80 mt-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Link href="/explore-dungeon">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200">
              Explore
            </button>
          </Link>
          <Link href="/character">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200">
              Character
            </button>
          </Link>
          <Link href="/inventory">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200">
              Inventory
            </button>
          </Link>
          <Link href="/shop">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200">
              Shop
            </button>
          </Link>
          <div className="flex flex-row gap-4 mt-8">
            <Link href="/settings">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-3 rounded transition duration-200">
                <FaCog />
              </button>
            </Link>
            <Link href="/credits">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-3 rounded transition duration-200">
                <FaInfoCircle />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMenuPage;
