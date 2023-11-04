import React, { useState } from 'react';
import styles from './Switch.module.css';

type SwitchButtonProps = {
  id: string;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label htmlFor={id} className={styles.switch}></label>
    </div>
  );
};

export default SwitchButton;
