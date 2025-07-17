import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, closeUserProfileModal, setUserName } from "store";
import { Button, IconButton, Input, Modal } from "components";

export const UserProfileModal = () => {
  const dispatch = useDispatch();
  const userRef = useRef<HTMLInputElement>(null);

  const userProfileIsOpen = useSelector(
    (state: RootState) => state.user.userProfileIsOpen
  );

  const handleSave = (): void => {
    const userName = userRef.current?.value.trim();
    if (!userName) {
      alert("Please enter a valid name.");
      return;
    }
    dispatch(setUserName(userName));
    dispatch(closeUserProfileModal());
  };

  const handleOnClose = (): void => {
    dispatch(closeUserProfileModal());
  };

  return (
    <Modal isOpen={userProfileIsOpen} onClose={handleOnClose}>
      <div
        className="bg-white w-[300px] rounded-[35px]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center bg-[#f5f5f5] p-[20px] rounded-t-[35px]">
          <h2 className="text-2xl font-gilroy-black ">User Settings</h2>
          <IconButton iconName="x" onClick={handleOnClose} />
        </header>
        <div className="p-[20px]">
          <fieldset className="flex justify-between gap-2 items-center mb-4">
            <label className="flex-1 text-lg">Name:</label>
            <Input ref={userRef} type="text" className="w-full" />
          </fieldset>
          <Button className="w-full" onClick={handleSave}>
            Save Settings
          </Button>
        </div>
      </div>
    </Modal>
  );
};
