import { useState } from "react";
import Team from "./components/team";
import "./App.css";

// 8 Pokémon məlumatı — hər oyunda bunlar ikiyə bölünür
const ALL_POKEMON = [
  { id: 4,   name: "Charmander",  type: "fire",     base_experience: 62  },
  { id: 7,   name: "Squirtle",    type: "water",    base_experience: 63  },
  { id: 11,  name: "Metapod",     type: "bug",      base_experience: 72  },
  { id: 12,  name: "Butterfree",  type: "flying",   base_experience: 178 },
  { id: 25,  name: "Pikachu",     type: "electric", base_experience: 112 },
  { id: 39,  name: "Jigglypuff",  type: "normal",   base_experience: 95  },
  { id: 94,  name: "Gengar",      type: "poison",   base_experience: 225 },
  { id: 133, name: "Eevee",       type: "normal",   base_experience: 65  },
];

// Massivi qarışdırıb ikiyə böl
function splitTeams(pokemon) {
  // Fisher-Yates shuffle
  const shuffled = [...pokemon].sort(() => Math.random() - 0.5);
  const half = Math.floor(shuffled.length / 2);
  return [shuffled.slice(0, half), shuffled.slice(half)];
}

// Komandanın ümumi EXP-ini hesabla
function calcExp(team) {
  return team.reduce((sum, p) => sum + p.base_experience, 0);
}

export default function App() {
  // teams[0] = birinci komanda, teams[1] = ikinci komanda
  const [teams, setTeams] = useState(() => splitTeams(ALL_POKEMON));

  // Start Game — yeni random komandalar yarat (səhifəni yeniləmək əvəzinə state-i sıfırla)
  const handleStartGame = () => {
    setTeams(splitTeams(ALL_POKEMON));
  };

  const expA = calcExp(teams[0]);
  const expB = calcExp(teams[1]);

  // Kim winner, kim lose?
  const resultA = expA >= expB ? "Winner" : "Lose";
  const resultB = expB > expA  ? "Winner" : "Lose";

  return (
    <div className="app">
      {/* Başlıq və Start Game düyməsi */}
      <header className="app-header">
        <h1 className="app-title">Pokedex</h1>
        <button className="start-btn" onClick={handleStartGame}>
          Start Game
        </button>
      </header>

      {/* Birinci Komanda */}
      <Team pokemon={teams[0]} totalExp={expA} result={resultA} />

      {/* VS ayırıcı */}
      <div className="vs-divider">
        <span className="vs-text">VS</span>
      </div>

      {/* İkinci Komanda */}
      <Team pokemon={teams[1]} totalExp={expB} result={resultB} />
    </div>
  );
}