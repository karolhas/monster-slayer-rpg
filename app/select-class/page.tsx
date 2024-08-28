"use client";

//hooks
import { useState } from "react";
import Image from "next/image";

//components
import Modal from "../../components/ui/Modal";
import Button from "@/components/ui/Button";

//images
import WarriorAvatar from "@/public/assets/avatars/warrior.webp";
import RangerAvatar from "@/public/assets/avatars/ranger.webp";
import MageAvatar from "@/public/assets/avatars/mage.webp";

type CharacterClass = "Warrior" | "Ranger" | "Mage";

const SelectClassPage = () => {
  const [selectedClass, setSelectedClass] = useState<CharacterClass | null>(
    null
  );
  const [stats, setStats] = useState({
    STR: 0,
    REC: 0,
    INT: 0,
    WIS: 0,
    DEX: 0,
    LUC: 0,
  });
  const [totalPoints, setTotalPoints] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClassSelect = (characterClass: CharacterClass) => {
    setSelectedClass(characterClass);
    setStats({
      STR: 0,
      REC: 0,
      INT: 0,
      WIS: 0,
      DEX: 0,
      LUC: 0,
    });
    setTotalPoints(6);
  };

  const handleStatChange = (stat: keyof typeof stats, value: number) => {
    if (totalPoints + stats[stat] - value >= 0) {
      setStats((prevStats) => ({
        ...prevStats,
        [stat]: value,
      }));
      setTotalPoints(totalPoints + stats[stat] - value);
    }
  };

  const handleStatIncrement = (stat: keyof typeof stats) => {
    if (totalPoints > 0) {
      handleStatChange(stat, stats[stat] + 1);
    }
  };

  const handleStatDecrement = (stat: keyof typeof stats) => {
    if (stats[stat] > 0) {
      handleStatChange(stat, stats[stat] - 1);
    }
  };

  const statsDescription = {
    STR: "Increase physical damage and attack-power.",
    REC: "Increase physical defense and HP.",
    INT: "Increase magic attack-power.",
    WIS: "Increase magic defence, success rate of magic attack and MP.",
    DEX: "Increase ranged attack, rate of evasion, successful hit rate.",
    LUC: "Increase critical hit chance, critical damage, critical evation rate.",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-700">
        Select Your Class
      </h2>
      <div className="flex justify-center mb-8 gap-2 mx-2">
        <div
          className={`p-2 border rounded-lg cursor-pointer hover:bg-blue-300 duration-200 ${
            selectedClass === "Warrior" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleClassSelect("Warrior")}
        >
          <Image
            src={WarriorAvatar}
            alt="Warrior"
            className="w-28 h-28 rounded-lg"
          />
          <div className="mt-2 text-center">Warrior</div>
        </div>
        <div
          className={`p-2 border rounded-lg cursor-pointer hover:bg-blue-300 duration-200 ${
            selectedClass === "Ranger" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleClassSelect("Ranger")}
        >
          <Image
            src={RangerAvatar}
            alt="Ranger"
            className="w-28 h-28 rounded-lg"
          />
          <div className="mt-2 text-center">Ranger</div>
        </div>
        <div
          className={`p-2 border rounded-lg cursor-pointer hover:bg-blue-300 duration-200 ${
            selectedClass === "Mage" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleClassSelect("Mage")}
        >
          <Image src={MageAvatar} alt="Mage" className="w-28 h-28 rounded-lg" />
          <div className="mt-2 text-center">Mage</div>
        </div>
      </div>
      {selectedClass && (
        <div className="w-[320px]">
          <h3 className="text-2xl font-bold mb-4 text-center">
            {selectedClass} statistics
          </h3>
          <div className="grid grid-cols-2 gap-4 border p-4 bg-slate-50 rounded-lg bg-opacity-80">
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">STR:</label>
              <input
                type="text"
                value={stats.STR}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("STR")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("STR")}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">REC:</label>
              <input
                type="text"
                value={stats.REC}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("REC")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("REC")}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">INT:</label>
              <input
                type="text"
                value={stats.INT}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("INT")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("INT")}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">WIS:</label>
              <input
                type="text"
                value={stats.WIS}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("WIS")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("WIS")}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">DEX:</label>
              <input
                type="text"
                value={stats.DEX}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("DEX")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("DEX")}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label className="block text-gray-700 font-bold">LUC:</label>
              <input
                type="text"
                value={stats.LUC}
                onChange={() => {}}
                className="bg-transparent appearance-none rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatDecrement("LUC")}
              >
                -
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold w-48 h-8 rounded-sm"
                onClick={() => handleStatIncrement("LUC")}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-blue-300 hover:bg-blue-400 px-2 py-1 rounded-lg mx-auto text-sm transition "
            >
              Learn about stats
            </button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Stats description"
          >
            <ul className="list-disc pl-5">
              {Object.entries(statsDescription).map(([stat, description]) => (
                <li key={stat} className="mb-2">
                  <strong>{stat}</strong>: {description}
                </li>
              ))}
            </ul>
          </Modal>
          <div className="mt-4 text-center font-bold">
            Remaining points: {totalPoints}
          </div>
        </div>
      )}
      <div className="flex space-x-4 mt-8">
        <Button
          href="/create-character"
          variant={"primary"}
          size={"default"}
          weight={"bold"}
        >
          Back
        </Button>
        <Button
          href="/game-menu"
          disabled={selectedClass === null || totalPoints > 0}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default SelectClassPage;
