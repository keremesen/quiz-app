import Game from "./components/game";

export default function Home() {
  return (
    <div className="flex flex-col bg-amber-50 min-h-screen items-center justify-center gap-10 text-slate-900">
      <Game />
    </div>
  );
}
