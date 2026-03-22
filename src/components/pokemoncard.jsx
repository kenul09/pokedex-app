// Hər bir Pokémon üçün kart komponenti
export default function PokemonCard({ pokemon }) {
  const { id, name, type, base_experience } = pokemon;

  // Şəkil URL-i — pokemon id-sinə görə yaradılır
  // ID 3 rəqəmli olmalıdır: 4 → 004, 25 → 025, 133 → 133
  const imgId = String(id).padStart(3, "0");
  const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`;

  // "Read more" düyməsi — Bulbapedia-ya yönləndirir
  const handleReadMore = () => {
    window.open(`https://bulbapedia.bulbagarden.net/wiki/${name}`, "_blank");
  };

  return (
    <div className="card">
      {/* Pokémon adı */}
      <h3 className="card-name">{name}</h3>

      {/* Şəkil */}
      <img
        className="card-img"
        src={imgUrl}
        alt={name}
        onError={(e) => {
          // Şəkil yüklənməsə placeholder göstər
          e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        }}
      />

      {/* Tip */}
      <p className="card-type">Type: {type}</p>

      {/* Təcrübə xalı */}
      <p className="card-exp">EXP {base_experience}</p>

      {/* Read more düyməsi */}
      <button className="read-btn" onClick={handleReadMore}>
        Read more
      </button>
    </div>
  );
}