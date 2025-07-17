import { type CardType } from "types";

const emojis = [
  "🦊",
  "🐶",
  "🐱",
  "🐭",
  "🐰",
  "🐵",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐷",
  "🐸",
  "🌝",
  "🌚",
  "🌸",
  "🌼",
  "🌻",
  "🌺",
  "🪷",
  "🍀",
  "🍎",
  "🍐",
  "🍋",
  "🍊",
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍌",
  "🍩",
  "🍪",
  "🍰",
  "🍫",
  "🍿",
  "🍭",
  "🍬",
  "🍨",
  "🍦",
  "🍕",
  "🍔",
  "🍟",
  "🌭",
  "🍗",
  "🍖",
  "🥩",
  "🥓",
  "🥗",
  "🥙",
  "🥪",
];

function shuffle(list: CardType[]): CardType[] {
  const result = [...list];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export const generateCards = (pairs: number): CardType[] => {
  const image = Array.from({ length: pairs }, (_, i) => ({
    image: emojis[i % emojis.length],
  }));

  const paired = [...image, ...image].map((card) => ({
    ...card,
    id: crypto.randomUUID(),
    isFlipped: false,
    isMatched: false,
  }));

  return shuffle(paired);
};

export const playSound = (src: string) => {
  const audio = new Audio(src);
  audio.play().catch((e) => {
    console.warn("Failed to play sound:", e);
  });
};
