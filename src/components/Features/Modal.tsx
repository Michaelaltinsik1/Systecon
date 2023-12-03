import { ReactNode } from 'react';

import Overlay from './Overlay';
import close from '../../icons/close.png';
interface ModalProps {
  children: ReactNode | ReactNode[];
  handleOnClick: () => void;
  className?: string;
}
const Modal = ({ children, handleOnClick, className = '' }: ModalProps) => {
  const closeOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <Overlay handleOnClick={handleOnClick}>
        <div
          onClick={(e) => closeOnClick(e)}
          className={`px-4 py-6 bg-gray-50 min-h-screen z-[1000] rounded-[16px] ${className}`}
        >
          <img
            onClick={handleOnClick}
            className="ml-auto"
            src={close}
            alt="close modal icon"
          />
          {children}
        </div>
      </Overlay>
    </>
  );
};

export default Modal;
