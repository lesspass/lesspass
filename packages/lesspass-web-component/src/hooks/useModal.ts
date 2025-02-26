import { useState } from "react";

const useModal = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  return {
    isOpen,
    toggle: () => setIsOpen(!isOpen),
  };
};

export default useModal;
