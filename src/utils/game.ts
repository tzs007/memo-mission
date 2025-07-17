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

/**
 * Randomly shuffles the elements of a given array of `CardType` using the Fisher-Yates algorithm.
 *
 * @param list - The array of `CardType` objects to shuffle.
 * @returns A new array containing the shuffled elements.
 */
function shuffle(list: CardType[]): CardType[] {
  const result = [...list];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * Generates an array of card objects for a memory game, each containing an emoji image.
 * Each unique image is duplicated to form pairs, and each card is assigned a unique ID.
 * The resulting array is shuffled before being returned.
 *
 * @param pairs - The number of unique pairs of cards to generate.
 * @returns An array of shuffled card objects, each with an image, unique ID, and initial state flags.
 */
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

/**
 * Plays an audio file from the specified source URL.
 *
 * Creates a new `Audio` object with the provided source and attempts to play it.
 * If playback fails (e.g., due to browser restrictions or missing file), a warning is logged to the console.
 *
 * @param src - The URL or path to the audio file to be played.
 */
export const playSound = (src: string) => {
  const audio = new Audio(src);
  audio.play().catch((e) => {
    console.warn("Failed to play sound:", e);
  });
};
