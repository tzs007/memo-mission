import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, flipCard, useFlippedCards } from "store";
import { CardType } from "types";

type CardProps = {
  card: CardType;
  index: number;
};

export const Card = ({ card, index }: CardProps) => {
  const dispatch = useDispatch();

  const isMatchInProgress = useSelector(
    (store: RootState) => store.game.isMatchInProgress
  );

  const flipped = useFlippedCards();

  const handleFlip = () => {
    dispatch(flipCard(card.id));
  };

  return (
    <div
      className={cn(`aspect-[100/150] animate-fade-in-up`, {
        "cursor-default !pointer-events-none":
          !isMatchInProgress ||
          card.isFlipped ||
          card.isMatched ||
          flipped.length === 2,
        "cursor-pointer pointer-events-auto":
          isMatchInProgress ||
          (!card.isFlipped && !card.isMatched && flipped.length < 2),
        "jello-horizontal": isMatchInProgress && card.isMatched,
      })}
      style={{ perspective: "1000px", animationDelay: `${index * 50}ms` }}
      onClick={handleFlip}
    >
      <div
        className={cn(
          "relative w-full h-full duration-500 transition-transform",
          {
            "[transform:rotateY(180deg)]": card.isFlipped,
          }
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full bg-white rounded-md sm:rounded-2xl flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.15)] group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="font-gilroy-black max-sm:[font-size:_clamp(1.5rem,-3.25rem+23.75vw,6.25rem)] sm:text-[100px] text-[#aaa] group-hover:text-[#B6E9DE] transition-all ">
            ?
          </p>
        </div>

        <div
          className="absolute w-full h-full bg-[#FCFBFB] border border-[#D5D5D5] rounded-md sm:rounded-2xl flex items-center justify-center shadow-[inset_0px_0px_0px_5px_rgba(255,_255,_255,_1)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-7xl">{card.image}</span>
        </div>
      </div>
    </div>
  );
};
