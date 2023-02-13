import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import {ReactComponent as IconClose} from './close.svg'
import styles from './Popup.module.css'

interface PropsPopup {
  openElement: ReactNode,
  children: ReactNode,
  outControl?: boolean
}

export const Popup: FC<PropsPopup> = ({ openElement, children }) => {

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleClose = () => {
    setOpenPopup(false)
  }

  const handleOpen = () => {
    setOpenPopup(true)
  }

  const handleClickOutside = () => {
    setOpenPopup(false)
  }

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      {openPopup &&
        <div className={styles.wrapperPopup} >
          <div className={styles.containerPopup} ref={ref}>
            {children}
          </div>
        </div>
      }
      <div onClick={handleOpen}>
        {openElement}
      </div>
    </>
  )
}

// Hook
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('touchstart', handleClick, true);
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('touchstart', handleClick, true);
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};