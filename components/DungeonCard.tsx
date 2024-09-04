//hooks
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

interface DungeonCardProps {
  title: string;
  levelRange: string;
}

const DungeonCard: React.FC<DungeonCardProps> = ({ title, levelRange }) => {
  return (
    <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg border-2 border-gray-400 text-center cursor-pointer hover:bg-gray-200">
      <Link href={`/${title}`}>
        <h2 className="text-lg font-bold uppercase">{title}</h2>
        <p className="text-sm mt-4">{levelRange}</p>
      </Link>
    </div>
  );
};

export default DungeonCard;
