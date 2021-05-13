import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Dialog.module.css';

const DialogContext = createContext({});

/**
 * The component where everything about the Dialog should live in.
 */
const DialogRoot = ({
  children,
  dialogId,
  defaultOpen,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, dialogId }}>
      {children}
    </DialogContext.Provider>
  );
};

DialogRoot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  dialogId: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
};

/**
 * The content of the dialog
 */
const DialogContent = ({ style, className, children }) => {
  const { isOpen } = useContext(DialogContext);

  return (
    <div hidden={!isOpen} style={style} className={`${styles['logiq-dialog-content']} ${className}`}>
      {children}
    </div>
  );
};

DialogContent.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/**
 * An external trigger that can open the dialog
 */
const DialogTrigger = ({ style, className, children }) => {
  const {
    isOpen,
    setIsOpen,
    dialogId,
  } = useContext(DialogContext);

  return (
    <button
      type="button"
      style={style}
      className={`${styles['logiq-dialog-trigger']} ${className}`}
      aria-haspopup={dialogId}
      aria-expanded={isOpen}
      aria-controls={dialogId}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </button>
  );
};

DialogTrigger.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/**
 * A button to close the dialog, you can place and style it any way you want
 */
const DialogCloseButton = ({ style, className, children }) => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <button
      type="button"
      style={style}
      className={`${styles['logiq-dialog-close']} ${className}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </button>
  );
};

DialogCloseButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export {
  DialogRoot,
  DialogContent,
  DialogTrigger,
  DialogCloseButton,
};
