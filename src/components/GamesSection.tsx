const games = [
  { title: "Eclipse: Shadow Protocol", desc: "A fractured cyber realm. Puzzle, battle and hack your way to the truth." },
  { title: "Nebulae Skies", desc: "Explore strange worlds and shape your own path through a cosmic adventure." },
  { title: "Circuit Breaker", desc: "Rewire broken machines and beat the clock." },
];

export const GamesSection = () => (
  <section id="games" className="pt-[16px] pb-[20px] px-5 max-w-[600px] mx-auto">
    <h2 className="text-[22px] font-bold mb-6 font-['Georgia']">Games</h2>
    <div className="space-y-[24px]">
      {games.map((game, i) => (
        <div key={i}>
          <h3 className="font-['Georgia'] font-bold text-[19px] mb-1">{game.title}</h3>
          <p className="text-[18px]">{game.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
