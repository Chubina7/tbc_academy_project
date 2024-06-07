import { Dispatch, SetStateAction, useEffect } from "react";

export default function useOutsideClickTrack(
  idToTrack: string,
  state: [boolean, Dispatch<SetStateAction<boolean>>]
) {
  const [value, setValue] = state;

  useEffect(() => {
    const handleMouseEvent = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.id !== idToTrack) {
        setValue(false);
      }
    };

    window.addEventListener("mousedown", handleMouseEvent);

    return () => {
      window.removeEventListener("mousedown", handleMouseEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return value;
}
