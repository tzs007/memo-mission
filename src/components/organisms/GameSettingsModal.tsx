import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import {
  type RootState,
  toggleSettingsModal,
  closeSettingsModal,
  setNumberOfPairs,
  setTimerDefault,
} from "store";
import { Button, IconButton, Input, Modal } from "components";

export const GameSettingsModal = () => {
  const [pairs, setPairs] = useState("12");
  const [time, setTime] = useState("60");
  const dispatch = useDispatch();

  const settingsIsOpen = useSelector(
    (state: RootState) => state.game.settingsIsOpen
  );

  const handleNumberOfPairsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPairs(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTime(e.target.value);
  };

  const handleSave = (): void => {
    const _pairs = Number(pairs);
    const _time = Number(time);

    if (
      Number.isNaN(_pairs) ||
      Number.isNaN(_time) ||
      _pairs < 2 ||
      _pairs > 50
    ) {
      return;
    }

    dispatch(setNumberOfPairs(_pairs));
    dispatch(setTimerDefault(_time));
    dispatch(closeSettingsModal());
  };

  const handleOnClose = (): void => {
    dispatch(toggleSettingsModal());
  };

  const checkPairsValidity = () => {
    return Number(pairs) < 2 || Number(pairs) > 50;
  };

  return (
    <Modal isOpen={settingsIsOpen} onClose={handleOnClose}>
      <div
        className="bg-white w-[300px] rounded-[35px]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center bg-[#f5f5f5] p-[20px] rounded-t-[35px]">
          <h2 className="text-2xl font-gilroy-black ">Game Settings</h2>
          <IconButton iconName="x" onClick={handleOnClose} />
        </header>
        <div className="p-[20px]">
          <fieldset className="flex justify-between gap-2 items-center mb-4">
            <label className="flex-1 text-lg">Number of pair cards:</label>
            <Input
              type="number"
              className="text-center"
              value={pairs}
              onChange={handleNumberOfPairsChange}
              onKeyDown={(e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              data-tooltip-id="number-of-pairs-tooltip"
            />
            <Tooltip
              id="number-of-pairs-tooltip"
              isOpen={checkPairsValidity()}
              place="right"
            >
              <p>The number of pairs of cards in the game.</p>
              <p>Even numbers only.</p>
              <p>Must be between 2 and 50.</p>
            </Tooltip>
          </fieldset>
          <fieldset className="flex justify-between gap-2 items-center mb-4">
            <label className="flex-1 text-lg">Countdown time (sec.):</label>
            <Input
              type="number"
              className="text-center"
              value={time}
              onChange={handleTimeChange}
            />
          </fieldset>
          <Button
            className="w-full"
            onClick={handleSave}
            disabled={checkPairsValidity()}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </Modal>
  );
};
