import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Dialog.module.css';

const DialogContext = createContext({});

const DialogContent = ({ children }) => {
  const { isOpen } = useContext(DialogContext);

  return (
    <div hidden={!isOpen} className={styles['logiq-dialog-backdrop']}>
      <div className={styles['logiq-dialog-content']}>
        {children}
      </div>
    </div>
  );
};

const DialogTrigger = ({ label, className = '' }) => {
  const {
    setIsOpen,
    isOpen,
    dialogId,
  } = useContext(DialogContext);

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={dialogId}
      onClick={() => setIsOpen(true)}
      className={className}
    >
      {label}
    </button>
  );
};

const DialogClose = ({ label, className = '' }) => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <button type="button" className={className} onClick={() => setIsOpen(false)}>
      {label}
    </button>
  );
};

/**
 * A dialog that sits on top of the window to display a message to the user or let the user
 * take some kind of action.
 */
const Dialog = ({
  id,
  children,
  defaultOpen = false,
  triggerLabel = 'Open dialog',
  closeLabel = 'Close',
  triggerClassNames = '',
  closeClassNames = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contextValue = {
    isOpen,
    setIsOpen,
    dialogId: id,
  };

  return (
    <>
      <DialogContext.Provider value={contextValue}>
        <DialogTrigger
          label={triggerLabel}
          className={triggerClassNames}
        />
        <DialogContent id={id}>
          <header>
            <DialogClose
              label={closeLabel}
              className={closeClassNames}
            />
          </header>

          {children}
        </DialogContent>
      </DialogContext.Provider>
    </>
  );
};

DialogContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DialogTrigger.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

DialogClose.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

Dialog.propTypes = {
  /**
   * The id of the Dialog to use with aria-controls
  */
  id: PropTypes.string.isRequired,

  /**
   * The content of the actual dialog
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Should the dialog be opened by default or after clicking the trigger?
   */
  defaultOpen: PropTypes.bool,

  /**
   * Call to action to open the dialog, used in the trigger
   */
  triggerLabel: PropTypes.string,

  /**
   * Text for closing the dialog
   */
  closeLabel: PropTypes.string,

  /**
   * Class names to add to the trigger to style it
   */
  triggerClassNames: PropTypes.string,

  /**
   * Class names to add to the close button to style it
   */
  closeClassNames: PropTypes.string,
};

export default Dialog;
