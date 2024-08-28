//hooks
import Image from "next/image";

//components
import Button from "@/components/ui/Button";

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
          <Button
            href="/create-character"
            variant={"primary"}
            size={"default"}
            weight={"bold"}
          >
            Play
          </Button>
          <Button
            href="/settings"
            variant={"primary"}
            size={"default"}
            weight={"bold"}
          >
            Settings
          </Button>
          <Button
            href="/credits"
            variant={"primary"}
            size={"default"}
            weight={"bold"}
          >
            Credits
          </Button>
        </div>
      </div>
    </div>
  );
}
