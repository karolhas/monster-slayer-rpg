//hooks
import Image from "next/image";

//images
import GameMenuBg from "@/public/assets/background/GameMenuBg.webp";

export default function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={GameMenuBg}
        alt="Game Menu Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
