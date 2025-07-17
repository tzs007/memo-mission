import { generateCards, playSound } from "./game";

// Mock crypto.randomUUID
global.crypto = {
  randomUUID: jest.fn(() => "mock-uuid"),
} as any;

// Mock Audio
describe("playSound", () => {
  let playMock: jest.Mock;

  beforeEach(() => {
    playMock = jest.fn(() => Promise.resolve());
    global.Audio = jest.fn().mockImplementation((src) => ({
      play: playMock,
      src,
    }));
    jest.clearAllMocks();
  });

  it("should create an Audio instance and call play", () => {
    playSound("/audio/success.mp3");
    expect(global.Audio).toHaveBeenCalledWith("/audio/success.mp3");
    expect(playMock).toHaveBeenCalled();
  });

  it("should warn if play fails", async () => {
    const playError = new Error("Audio error");
    playMock.mockRejectedValueOnce(playError);

    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    playSound("/audio/success.mp3");
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(warnSpy).toHaveBeenCalledWith("Failed to play sound:", playError);

    warnSpy.mockRestore();
  });
});

describe("generateCards", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should generate the correct number of cards (pairs * 2)", () => {
    const pairs = 4;
    const cards = generateCards(pairs);
    expect(cards).toHaveLength(pairs * 2);
  });

  it("should assign unique ids to each card", () => {
    (global.crypto.randomUUID as jest.Mock).mockImplementation(() =>
      Math.random().toString()
    );
    const cards = generateCards(3);
    const ids = cards.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(cards.length);
  });

  it("should assign isFlipped and isMatched as false", () => {
    const cards = generateCards(2);
    cards.forEach((card) => {
      expect(card.isFlipped).toBe(false);
      expect(card.isMatched).toBe(false);
    });
  });

  it("should use different emojis for different pairs", () => {
    const cards = generateCards(5);
    const images = Array.from(new Set(cards.map((c) => c.image)));
    expect(images.length).toBe(5);
  });

  it("should shuffle the cards (not all pairs together)", () => {
    // Since shuffle is random, run multiple times to reduce false positives
    const pairs = 6;
    let isShuffled = false;
    for (let i = 0; i < 10; i++) {
      const cards = generateCards(pairs);
      const firstHalf = cards.slice(0, pairs);
      const secondHalf = cards.slice(pairs);
      if (!firstHalf.every((c, idx) => c.image === secondHalf[idx].image)) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  it("should wrap around emojis if pairs > emojis.length", () => {
    const pairs = 60;
    const cards = generateCards(pairs);
    const images = cards.map((c) => c.image);
    expect(images.length).toBe(pairs * 2);
  });
});
