//hooks
import React from "react";
import Image from "next/image";

//components
import StatBar from "./StatBar";

//images
import goldIcon from "@/public/assets/gold-icon.png";

interface PlayerCardProps {
  nickname: string;
  level: number;
  avatar: string;
  hp: { current: number; max: number };
  mp: { current: number; max: number };
  exp: { current: number; max: number };
  gold: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  nickname,
  level,
  avatar,
  hp,
  mp,
  exp,
  gold,
}) => (
  <div className="bg-white bg-opacity-70 p-2 rounded-lg shadow-lg w-80">
    <div className="flex items-center mb-4">
      <div className="relative">
        <Image
          src={avatar}
          alt="Character Avatar"
          width={75}
          height={75}
          className="rounded-full border border-gray-300"
        />
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
          {level}
        </div>
      </div>
      <div className="ml-4 flex-grow">
        <h2 className="text-xl font-bold">{nickname}</h2>
        <StatBar
          label="HP"
          current={hp.current}
          max={hp.max}
          color="bg-red-600"
        />
        <StatBar
          label="MP"
          current={mp.current}
          max={mp.max}
          color="bg-blue-600"
        />
        <StatBar
          label="EXP"
          current={exp.current}
          max={exp.max}
          color="bg-green-600"
        />
        <div className="flex items-center mt-2">
          <Image src={goldIcon} alt="Gold" width={20} height={20} />
          <span className="ml-2">{gold}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PlayerCard;
