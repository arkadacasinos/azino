import type { Game } from "@/components/casino/game-card"

export const topGames: Game[] = [
  { title: "Trump It Coin Link", provider: "Fugaso", query: "casino slot trump coin gold red poster" },
  { title: "Zeus Power Link", provider: "Fugaso", query: "casino slot zeus thunder lightning yellow" },
  { title: "Electric Coins", provider: "Fugaso", query: "casino slot blue electric vortex coin" },
  { title: "Fortune Bags", provider: "Fugaso", query: "casino slot purple character money bags" },
  { title: "1000 Olympus Rivals", provider: "Fugaso", query: "casino slot orange olympus battle warriors" },
  { title: "1001 Fruit Wishes", provider: "Fugaso", query: "casino slot fruits red genie lamp" },
  { title: "Merge Up 2", provider: "BGaming", query: "casino slot pastel green pink merge candy" },
]

export const newGames: Game[] = [
  { title: "Royal Easter", provider: "BGaming", query: "casino slot lucky seven red gold royal" },
  { title: "Sugar Merge Up", provider: "BGaming", query: "casino slot pink candy lollipop pastel" },
  { title: "Cult", provider: "PragmaticPlay", query: "casino slot dark cult man poster" },
  { title: "Burning Hell 3000", provider: "Endorphina", query: "casino slot devil red fire flames" },
  { title: "Rice & Riches", provider: "Pragmatic", query: "casino slot rice riches asian dragon" },
  { title: "Trump It Coin Link", provider: "Fugaso", query: "casino slot trump coin gold red" },
  { title: "Fortune Chests", provider: "Endorphina", query: "casino slot treasure chest gold gems" },
]

export const slotsGames: Game[] = [
  { title: "Ze Zeus", provider: "Hacksawgaming", query: "casino slot zeus blue beard greek god" },
  { title: "Duel at Dawn", provider: "Hacksawgaming", query: "casino slot cowboy duel dark western" },
  { title: "Rip City", provider: "Hacksaw", query: "casino slot black white cat city noir" },
  { title: "Le Pharaoh", provider: "Hacksawgaming", query: "casino slot egypt pharaoh cartoon dark" },
  { title: "Rad Max", provider: "Hacksawgaming", query: "casino slot rat warrior post apocalyptic" },
  { title: "Eternal Duel", provider: "Hacksawgaming", query: "casino slot warriors blue eternal battle" },
  { title: "Fortune Chests", provider: "Endorphina", query: "casino slot treasure chest gold gems" },
]

export const liveCasino: Game[] = [
  { title: "Blackjack 10 Azure", provider: "Pragmatic Play", query: "live casino blackjack dealer woman blue" },
  { title: "Crazy Time", provider: "Evolution", query: "live casino game show crazy time presenter colorful" },
  { title: "Baccarat 2", provider: "Pragmatic Play", query: "live casino baccarat dealer woman elegant" },
  { title: "One Blackjack", provider: "Pragmatic Play", query: "live casino blackjack solo dealer table" },
  { title: "Boom City", provider: "Pragmatic Play", query: "live casino game show boom city slot wheel" },
  { title: "Super Sic Bo", provider: "Evolution", query: "live casino sic bo dealer woman red asian" },
  { title: "Mega Wheel", provider: "Pragmatic Play", query: "live casino mega wheel game show host" },
]

export const endorphinaGames: Game[] = [
  { title: "Hell Hot 100", provider: "Endorphina", query: "casino slot hot lucky seven red devil" },
  { title: "Ultra Fresh", provider: "Endorphina", query: "casino slot raspberry fruit fresh green" },
  { title: "Fortune Stars", provider: "Endorphina", query: "casino slot pink cat fortune stars cute" },
  { title: "Thunder Crown", provider: "Endorphina", query: "casino slot crown gold royal red" },
  { title: "2026 Hit Slot", provider: "Endorphina", query: "casino slot diamond gold red crystal" },
  { title: "3 Coin Towers", provider: "Endorphina", query: "casino slot asian coin towers chinese red" },
  { title: "Crown Coins", provider: "Endorphina", query: "casino slot orange crown coins shiny" },
]

export const easterGames: Game[] = [
  { title: "Mega Mushrooms", provider: "PragmaticPlay", query: "casino slot mushrooms cartoon green forest" },
  { title: "Bigger Barn House Bonanza", provider: "PragmaticPlay", query: "casino slot fox farm bonanza orange" },
  { title: "Rabbit Garden", provider: "Pragmatic Play", query: "casino slot rabbit garden carrot pink cute" },
  { title: "Rabbits Rabbits Rabbits", provider: "Endorphina", query: "casino slot rabbits cartoon golden orange" },
  { title: "Raging Wings", provider: "Endorphina", query: "casino slot angry birds green forest" },
  { title: "3 Royal Dracos", provider: "Endorphina", query: "casino slot dragons fire red royal" },
  { title: "Easter Luck", provider: "Endorphina", query: "casino slot easter rabbit eggs pastel" },
]

export const belatraGames: Game[] = [
  { title: "Mummyland Treasures", provider: "Belatra", query: "casino slot mummy egypt purple treasure" },
  { title: "Slattors Battle Orcs vs Elves", provider: "Belatra Games", query: "casino slot orcs elves battle fantasy" },
  { title: "Lucky Barrel Tavern", provider: "Belatra", query: "casino slot tavern viking beard barrel" },
  { title: "Long Neck Fortune", provider: "Belatra Games", query: "casino slot dinosaur giraffe fortune" },
  { title: "Big Bang 2", provider: "Belatra Games", query: "casino slot red planet space explosion" },
  { title: "Lips vs Roses", provider: "Belatra", query: "casino slot western cowboys duel sepia" },
  { title: "Cyber Gypsies", provider: "Belatra", query: "casino slot cyberpunk gypsy man neon" },
]

export const amigoGames: Game[] = [
  { title: "1000 Olympus Rivals", provider: "AmigoGaming", query: "casino slot olympus warriors orange battle" },
  { title: "1001 Fruit Wishes", provider: "AmigoGaming", query: "casino slot fruits red genie wishes" },
  { title: "Fortune Bags", provider: "AmigoGaming", query: "casino slot purple character money bags" },
  { title: "Olympus Rivals", provider: "AmigoGaming", query: "casino slot blue greek warrior olympus" },
  { title: "3 Energy Crowns", provider: "AmigoGaming", query: "casino slot green energy crowns mystical" },
  { title: "5 Spirit Volcanoes", provider: "AmigoGaming", query: "casino slot volcano lava red mystical" },
  { title: "12 Fortune Signs", provider: "AmigoGaming", query: "casino slot zodiac fortune signs gold" },
]

export const allRows = [
  { title: "Топ", games: topGames },
  { title: "Новые", games: newGames },
  { title: "Слоты", games: slotsGames },
  { title: "Лайв Казино", games: liveCasino },
  { title: "Endorphina", games: endorphinaGames },
  { title: "Easter", games: easterGames },
  { title: "Belatra", games: belatraGames },
  { title: "AmigoGaming", games: amigoGames },
]
