import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import styler from './CollapsibleMenu.module.css';

interface IProps {
  open?: boolean;
  children?: React.ReactNode;
  content?: string;
}

const Collapsible: React.FC<IProps> = ({ open, children, content }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open ?? true);

  const handleFilterOpening = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <div>
        <button type="button" className={styler.Button} onClick={handleFilterOpening}>
          <div className={styler.Text}>{content}</div>
          <div className={styler.UpDown}>
              {!isOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </div>
        </button>
        <div className={styler.borderBottom}>
          <div>{isOpen && <div className={styler.ContainerChild}>{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
