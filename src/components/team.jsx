import PokemonCard from "./pokemoncard";

// Bir komandanın bütün kartlarını + nəticəni göstərir
export default function Team({ pokemon, totalExp, result }) {
  const isWinner = result === "Winner";

  return (
    <div className={`team ${isWinner ? "team--winner" : "team--lose"}`}>
      {/* Nəticə: Winner (yaşıl) və ya Lose (qırmızı) */}
      <p className={`team-result ${isWinner ? "result--winner" : "result--lose"}`}>
        {result}
      </p>

      {/* Ümumi EXP */}
      <p className="team-exp">{totalExp}</p>

      {/* Pokémon kartları */}
      <div className="team-cards">
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}