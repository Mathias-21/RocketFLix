export function Header() {
  return (
    <div className="flex p-5 align-middle bg-zinc-900/25 cursor-pointer">
      <h2 className="text-2xl text-zinc-200 font-semibold">RocketFlix</h2>
      <nav className="flex flex-1 gap-10 align-middle justify-center">
        <p className="text-lg text-zinc-200 hover:text-zinc-400 duration-200 cursor-pointer">
          Página Inicial
        </p>
        <p className="text-lg text-zinc-200 hover:text-zinc-400 duration-200 cursor-pointer">
          Filmes
        </p>
        <p className="text-lg text-zinc-200 hover:text-zinc-400 duration-200 cursor-pointer">
          Séries
        </p>
        <p className="text-lg text-zinc-200 hover:text-zinc-400 duration-200 cursor-pointer">
          Lançamentos
        </p>
        <p className="text-lg text-zinc-200 hover:text-zinc-400 duration-200 cursor-pointer">
          Sobre nós
        </p>
      </nav>
    </div>
  );
}
