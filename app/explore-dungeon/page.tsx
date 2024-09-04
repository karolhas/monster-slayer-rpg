//components
import DungeonCard from "@/components/DungeonCard";
import Button from "@/components/ui/Button";

function ExploreDungeon() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16">
      <h1 className="text-3xl font-semibold text-gray-800">Explore dungeons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <DungeonCard title="dark forest" levelRange="1-10lvl" />
        <DungeonCard title="mysterious crypt" levelRange="10-20lvl" />
        <DungeonCard title="chaotic tombs" levelRange="20-30lvl" />
        <DungeonCard title="abandoned tunnels" levelRange="30-40lvl" />
        <DungeonCard title="great castle" levelRange="40-50lvl" />
      </div>
      <Button
        href="/game-menu"
        variant={"primary"}
        size={"default"}
        weight={"bold"}
      >
        Back
      </Button>
    </div>
  );
}
export default ExploreDungeon;
