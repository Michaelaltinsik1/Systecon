import { ReactNode } from 'react';

interface OverlayProps {
  handleOnClick: () => void;
  children: ReactNode;
}
const Overlay = ({ handleOnClick, children }: OverlayProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handleOnClick();
  };
  return (
    <div
      onClick={(e) => clickHandler(e)}
      className={`box-border z-50 fixed w-full h-full bg-opacity-80 top-0 left-0`}
    >
      {children}
    </div>
  );
};
export default Overlay;
