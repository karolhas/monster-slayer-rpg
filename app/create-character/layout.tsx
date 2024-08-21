import Image from "next/image";
import MainMenuBg from "@/public/assets/background/MainMenuBg.webp";

export default function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={MainMenuBg}
        alt="Main Menu Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
