const quiz = [
  {
    id: "1",
    Question: "Who is the creator and manga author of Naruto?",
    Correct_Answer: "Masashi Kishimoto",
    Trivia:
      "Did you know? Masashi Kishimoto started developing Naruto as a one-shot manga in 1997 before it became a full series.",
    Option_1: "Masashi Kishimoto",
    Option_2: "Eiichiro Oda",
    Option_3: "Hiro Mashima",
    Option_4: "Yoshihiro Togashi",
    Avatar: "./avatars/Naruto.png",
    Difficulty: "Easy",
  },
  {
    id: "2",
    Question:
      "In which game series do you play as Link to rescue the princess of Hyrule?",
    Correct_Answer: "The Legend of Zelda",
    Trivia:
      "Did you know? The Legend of Zelda series began in 1986 and is one of Nintendo's flagship franchises.",
    Option_1: "Final Fantasy",
    Option_2: "The Legend of Zelda",
    Option_3: "Metroid",
    Option_4: "Dark Souls",
    Avatar: "./avatars/Zelda.png",
    Difficulty: "Easy",
  },
  {
    id: "3",
    Question: "Which anime features a character named Edward Elric?",
    Correct_Answer: "Fullmetal Alchemist",
    Trivia:
      "Did you know? Fullmetal Alchemist was first serialized in 2001 and has won numerous awards for its storytelling.",
    Option_1: "Bleach",
    Option_2: "Fullmetal Alchemist",
    Option_3: "Naruto",
    Option_4: "Attack on Titan",
    Avatar: "./avatars/FullMetal.png",
    Difficulty: "Easy",
  },
  {
    id: "4",
    Question: "What is the main goal of the game Minecraft?",
    Correct_Answer: "To survive and create",
    Trivia:
      "Did you know? Minecraft was created by Markus Persson and has become one of the best-selling games of all time.",
    Option_1: "To defeat the Ender Dragon",
    Option_2: "To survive and create",
    Option_3: "To collect coins",
    Option_4: "To solve puzzles",
    Avatar: "./avatars/Minecraft.png",
    Difficulty: "Easy",
  },
  {
    id: "5",
    Question: "What is the name of Goku's signature attack in Dragon Ball?",
    Correct_Answer: "Kamehameha",
    Trivia:
      "Did you know? The Kamehameha wave is named after the Hawaiian king, Kamehameha I.",
    Option_1: "Kamehameha",
    Option_2: "Spirit Bomb",
    Option_3: "Final Flash",
    Option_4: "Big Bang Attack",
    Avatar: "./avatars/Goku.png",
    Difficulty: "Easy",
  },
  {
    id: "6",
    Question: "Which anime features the character Monkey D. Luffy?",
    Correct_Answer: "One Piece",
    Trivia:
      "Did you know? One Piece holds the Guinness World Record for the most copies published for the same comic book series by a single author.",
    Option_1: "Naruto",
    Option_2: "One Piece",
    Option_3: "Dragon Ball",
    Option_4: "Bleach",
    Avatar: "./avatars/Luffy.png",
    Difficulty: "Easy",
  },
  {
    id: "7",
    Question: "In which game series would you find the character Master Chief?",
    Correct_Answer: "Halo",
    Trivia:
      "Did you know? The first Halo game, Halo: Combat Evolved, was released in 2001 and was a launch title for the original Xbox.",
    Option_1: "Call of Duty",
    Option_2: "Halo",
    Option_3: "Gears of War",
    Option_4: "Destiny",
    Avatar: "./avatars/Halo.png",
    Difficulty: "Easy",
  },
  {
    id: "8",
    Question: "What element-type is Pikachu in Pokémon?",
    Correct_Answer: "Electric",
    Trivia:
      "Did you know? Pikachu is the mascot of the Pokémon franchise and has become one of the most recognizable characters in pop culture.",
    Option_1: "Fire",
    Option_2: "Electric",
    Option_3: "Water",
    Option_4: "Grass",
    Avatar: "./avatars/PikachuAsh.png",
    Difficulty: "Easy",
  },
  {
    id: "9",
    Question:
      "Which character is known as the 'Hero of Time' in the Zelda series?",
    Correct_Answer: "Link",
    Trivia:
      "Did you know? Link is often depicted as a silent protagonist throughout the Zelda series, with the exception of a few spoken words.",
    Option_1: "Zelda",
    Option_2: "Link",
    Option_3: "Ganondorf",
    Option_4: "Sheik",
    Avatar: "./avatars/Link.png",
    Difficulty: "Easy",
  },
  {
    id: "10",
    Question:
      "In DeathNote which anime character tries to solve a series of unexplained deaths around the world?",
    Correct_Answer: "L Lawliet",
    Trivia:
      "Did you know? The Death Note manga was created by Tsugumi Ohba and illustrated by Takeshi Obata. It was first serialized in 2003.",
    Option_1: "Ryuk",
    Option_2: "Light Yagami",
    Option_3: "Chief Yagami",
    Option_4: "L Lawliet",
    Avatar: "./avatars/L.png",
    Difficulty: "Easy",
  },
  {
    id: "11",
    Question: "Who is the main protagonist in Final Fantasy VII?",
    Correct_Answer: "Cloud Strife",
    Trivia:
      "Did you know? Final Fantasy VII is often regarded as one of the greatest video games of all time and was first released in 1997.",
    Option_1: "Sephiroth",
    Option_2: "Cloud Strife",
    Option_3: "Zack Fair",
    Option_4: "Squall Leonhart",
    Avatar: "./avatars/Cloud.png",
    Difficulty: "Easy",
  },
  {
    id: "12",
    Question:
      "Which anime features a giant humanoid robots called Evangelions?",
    Correct_Answer: "Neon Genesis Evangelion",
    Trivia:
      "Did you know? Neon Genesis Evangelion is often considered one of the most influential and controversial anime of all time.",
    Option_1: "Mobile Suit Gundam",
    Option_2: "Neon Genesis Evangelion",
    Option_3: "Attack on Titan",
    Option_4: "Fullmetal Alchemist",
    Avatar: "./avatars/Evangelion.png",
    Difficulty: "Easy",
  },

  {
    id: "13",
    Question:
      "Which anime features a boy named Gon Freecss searching for his father?",
    Correct_Answer: "Hunter x Hunter",
    Trivia:
      "Did you know? Hunter x Hunter has been praised for its complex storylines and characters, and it has been adapted into two anime series.",
    Option_1: "Naruto",
    Option_2: "Hunter x Hunter",
    Option_3: "Dragon Ball",
    Option_4: "Bleach",
    Avatar: "./avatars/HunterxHunter.png",
    Difficulty: "Easy",
  },
  {
    id: "14",
    Question:
      "Who is Sonic the Hedgehog's best friend and sidekick known for his ability to fly using his two tails?",
    Correct_Answer: "Tails (Miles Prower)",
    Trivia:
      "Did you know? Tails' full name is Miles Prower, which is a pun on 'miles per hour' reflecting his speed.",
    Option_1: "Knuckles the Echidna",
    Option_2: "Tails (Miles Prower)",
    Option_3: "Shadow the Hedgehog",
    Option_4: "Amy Rose",
    Avatar: "./avatars/Tails.png",
    Difficulty: "Easy",
  },

  {
    id: "15",
    Question:
      "In 'Dragon Ball Z', what is the highest Super Saiyan transformation Goku achieves during his fight with Frieza on Planet Namek?",
    Correct_Answer: "Super Saiyan",
    Trivia:
      "Did you know? Goku’s transformation into a Super Saiyan on Namek marks a legendary moment in anime history, where he becomes the first Saiyan to achieve this form in over 1,000 years.",
    Option_1: "Super Saiyan",
    Option_2: "Super Saiyan 2",
    Option_3: "Super Saiyan 3",
    Option_4: "Ultra Instinct",
    Avatar: "./avatars/Frieza.png",
    Difficulty: "Medium",
  },
  {
    id: "16",
    Question:
      "In 'Overwatch', which hero is a genetically engineered gorilla and the leader of the team?",
    Correct_Answer: "Winston",
    Trivia:
      "Did you know? Winston was raised on the Horizon Lunar Colony and takes his name from the scientist who mentored him, Dr. Harold Winston.",
    Option_1: "Winston",
    Option_2: "Reinhardt",
    Option_3: "Torbjörn",
    Option_4: "D.Va",
    Avatar: "./avatars/Overwatch.png",
    Difficulty: "Medium",
  },
  {
    id: "17",
    Question:
      "In 'Attack on Titan', which character becomes the Armored Titan?",
    Correct_Answer: "Reiner Braun",
    Trivia:
      "Did you know? Reiner's transformation into the Armored Titan is a key moment in the series, as he reveals his true identity to Eren during a crucial battle.",
    Option_1: "Annie Leonhart",
    Option_2: "Bertholdt Hoover",
    Option_3: "Reiner Braun",
    Option_4: "Zeke Yeager",
    Avatar: "./avatars/ArmoredTitan.png",
    Difficulty: "Medium",
  },
  {
    id: "18",
    Question:
      "In 'Kingdom Hearts', what is the name of Sora's signature weapon?",
    Correct_Answer: "Keyblade",
    Trivia:
      "Did you know? The Keyblade is not only a weapon but also a tool used to unlock the secrets of various worlds and even open doors to other dimensions.",
    Option_1: "Keyblade",
    Option_2: "Soul Eater",
    Option_3: "Master Sword",
    Option_4: "Excalibur",
    Avatar: "./avatars/Keyblade.png",
    Difficulty: "Medium",
  },
  {
    id: "19",
    Question:
      "In 'One Punch Man', what is the source of Saitama's immense strength?",
    Correct_Answer: "Intense physical training",
    Trivia:
      "Did you know? Saitama’s training regimen consists of 100 push-ups, 100 sit-ups, 100 squats, and a 10 km run every day, without fail, for three years.",
    Option_1: "Intense physical training",
    Option_2: "A mysterious serum",
    Option_3: "Alien technology",
    Option_4: "Divine intervention",
    Avatar: "./avatars/OnePunchMan.png",
    Difficulty: "Medium",
  },
  {
    id: "20",
    Question:
      "In 'The Legend of Zelda: Ocarina of Time', which item allows Link to travel through time?",
    Correct_Answer: "The Ocarina of Time",
    Trivia:
      "Did you know? The Ocarina of Time can manipulate time by playing specific songs, such as the Song of Time, which opens the Door of Time.",
    Option_1: "The Ocarina of Time",
    Option_2: "The Master Sword",
    Option_3: "The Light Medallion",
    Option_4: "The Hookshot",
    Avatar: "./avatars/OcarinaOfTime.png",
    Difficulty: "Medium",
  },
  {
    id: "21",
    Question:
      "In 'Naruto', what is the name of the technique used by Kakashi Hatake that allows him to copy his opponents' moves?",
    Correct_Answer: "Sharingan",
    Trivia:
      "Did you know? The Sharingan is a unique dojutsu ability that Kakashi gained after receiving an eye transplant from his teammate, Obito Uchiha.",
    Option_1: "Sharingan",
    Option_2: "Rinnegan",
    Option_3: "Byakugan",
    Option_4: "Mangekyo Sharingan",
    Avatar: "./avatars/Sharingan.png",
    Difficulty: "Medium",
  },
  {
    id: "22",
    Question:
      "In 'The Witcher' series, what is the name of Geralt of Rivia's trusted horse?",
    Correct_Answer: "Roach",
    Trivia:
      "Did you know? Geralt names every one of his horses 'Roach,' regardless of their breed or appearance.",
    Option_1: "Roach",
    Option_2: "Pegasus",
    Option_3: "Kelpie",
    Option_4: "Storm",
    Avatar: "./avatars/Geralt.png",
    Difficulty: "Medium",
  },
  {
    id: "23",
    Question:
      "In 'My Hero Academia', what is the name of the superhero agency led by All Might?",
    Correct_Answer: "Might Tower",
    Trivia:
      "Did you know? All Might, once the Symbol of Peace, used Might Tower as his base of operations before retiring due to injuries sustained from his final battle.",
    Option_1: "Might Tower",
    Option_2: "UA Academy",
    Option_3: "Endeavor Agency",
    Option_4: "Hero Association",
    Avatar: "./avatars/AllMight.png",
    Difficulty: "Medium",
  },
  {
    id: "24",
    Question:
      "In 'Final Fantasy X', what is the name of the aeon summoned by Yuna that resembles a massive dragon?",
    Correct_Answer: "Bahamut",
    Trivia:
      "Did you know? Bahamut is one of the most powerful aeons Yuna can summon and plays a significant role in the overall story of 'Final Fantasy X.'",
    Option_1: "Bahamut",
    Option_2: "Ifrit",
    Option_3: "Shiva",
    Option_4: "Valefor",
    Avatar: "./avatars/Bahamut.png",
    Difficulty: "Medium",
  },

  {
    id: "25",
    Question:
      "In 'Neon Genesis Evangelion', what is the official name of the giant mechs piloted by the main characters?",
    Correct_Answer: "Evangelions (Evas)",
    Trivia:
      "Did you know? The Evangelions are not entirely mechanical; they are part biological beings with human souls inside.",
    Option_1: "Gundams",
    Option_2: "Evangelions (Evas)",
    Option_3: "Titans",
    Option_4: "Mecha-Titans",
    Avatar: "./avatars/Evangelion.png",
    Difficulty: "Hard",
  },
  {
    id: "26",
    Question:
      "In 'Dark Souls', which character is known for the phrase 'Praise the Sun!' and offers the player help in their journey?",
    Correct_Answer: "Solaire of Astora",
    Trivia:
      "Did you know? Solaire's obsession with the sun is symbolic of his quest for his own 'inner light' in a world covered in darkness.",
    Option_1: "Artorias",
    Option_2: "Solaire of Astora",
    Option_3: "Siegmeyer of Catarina",
    Option_4: "Gwyn, Lord of Cinder",
    Avatar: "./avatars/DarkSouls.png",
    Difficulty: "Hard",
  },
  {
    id: "27",
    Question:
      "In 'One Piece', what is the name of the ancient weapon that is said to have the power to destroy the world?",
    Correct_Answer: "Pluton",
    Trivia:
      "Did you know? Pluton is one of the three ancient weapons mentioned in the story, and its location is rumored to be known by Franky, the Straw Hat's shipwright.",
    Option_1: "Uranus",
    Option_2: "Poseidon",
    Option_3: "Pluton",
    Option_4: "Neptune",
    Avatar: "./avatars/OnePiece.png",
    Difficulty: "Hard",
  },
  {
    id: "28",
    Question:
      "In 'Final Fantasy VII', what is the name of the city where the protagonist Cloud Strife begins his journey?",
    Correct_Answer: "Midgar",
    Trivia:
      "Did you know? Midgar is a massive city controlled by the Shinra Electric Power Company and powered by Mako, the life energy of the planet.",
    Option_1: "Nibelheim",
    Option_2: "Midgar",
    Option_3: "Cosmo Canyon",
    Option_4: "Gold Saucer",
    Avatar: "./avatars/VII.png",
    Difficulty: "Hard",
  },
  {
    id: "29",
    Question:
      "In 'Attack on Titan', which Titan is known as the most intelligent and strategic among the Nine Titans?",
    Correct_Answer: "The Beast Titan",
    Trivia:
      "Did you know? The Beast Titan is primarily controlled by Zeke Yeager and has the unique ability to throw objects with deadly precision.",
    Option_1: "The Armored Titan",
    Option_2: "The Beast Titan",
    Option_3: "The Founding Titan",
    Option_4: "The Colossal Titan",
    Avatar: "./avatars/BeastTitan.png",
    Difficulty: "Hard",
  },
  {
    id: "30",
    Question:
      "In 'The Legend of Zelda: Majora's Mask', how many days do you have to stop the moon from crashing into the world?",
    Correct_Answer: "Three",
    Trivia:
      "Did you know? Players can use the 'Song of Time' to go back to the first day, resetting the clock but keeping most of their key items.",
    Option_1: "Three",
    Option_2: "Five",
    Option_3: "Seven",
    Option_4: "Ten",
    Avatar: "./avatars/MajorasMask.png",
    Difficulty: "Hard",
  },
  {
    id: "31",
    Question:
      "In 'Fullmetal Alchemist: Brotherhood', what is the fundamental law of alchemy called that governs all exchanges?",
    Correct_Answer: "Equivalent Exchange",
    Trivia:
      "Did you know? The law of Equivalent Exchange states that to gain something, something of equal value must be lost, a principle that defines the characters' journey.",
    Option_1: "Automail Exchange",
    Option_2: "Equivalent Exchange",
    Option_3: "Philosopher's Exchange",
    Option_4: "State Alchemy",
    Avatar: "./avatars/Alchemy.png",
    Difficulty: "Hard",
  },
  {
    id: "32",
    Question:
      "In 'The Witcher 3: Wild Hunt', what is the name of the Witcher who mentors the protagonist, Geralt of Rivia?",
    Correct_Answer: "Vesemir",
    Trivia:
      "Did you know? Vesemir is the oldest Witcher alive and one of the few who survived the brutal Trial of the Grasses, a mutation process that grants Witchers their powers.",
    Option_1: "Eskel",
    Option_2: "Lambert",
    Option_3: "Vesemir",
    Option_4: "Letho",
    Avatar: "./avatars/Witcher.png",
    Difficulty: "Hard",
  },
  {
    id: "33",
    Question:
      "In 'Naruto', what is the name of the jutsu that Itachi Uchiha uses to trap his opponents in an illusionary world?",
    Correct_Answer: "Tsukuyomi",
    Trivia:
      "Did you know? Tsukuyomi is one of the most powerful genjutsu, able to control an opponent’s perception of time, making seconds of torture feel like days.",
    Option_1: "Amaterasu",
    Option_2: "Tsukuyomi",
    Option_3: "Susanoo",
    Option_4: "Kamui",
    Avatar: "./avatars/Itachi.png",
    Difficulty: "Hard",
  },
  {
    id: "34",
    Question:
      "In 'Persona 5', what is the protagonist's code name when he joins the Phantom Thieves?",
    Correct_Answer: "Joker",
    Trivia:
      "Did you know? Joker's real name is Ren Amamiya in the anime adaptation of 'Persona 5', though the player can choose any name in the game.",
    Option_1: "Skull",
    Option_2: "Fox",
    Option_3: "Joker",
    Option_4: "Crow",
    Avatar: "./avatars/Joker.png",
    Difficulty: "Hard",
  },
];

export default quiz;
