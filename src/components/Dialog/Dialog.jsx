import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

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
const DialogContent = ({ children }) => {
  const { isOpen } = useContext(DialogContext);

  return (
    <div hidden={!isOpen} className="logiq-dialog-content">
      {children}
    </div>
  );
};

DialogContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/**
 * An external trigger that can open the dialog
 */
const DialogTrigger = ({ children }) => {
  const {
    isOpen,
    setIsOpen,
    dialogId,
  } = useContext(DialogContext);

  return (
    <button
      type="button"
      className="logiq-dialog-trigger"
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
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/**
 * A button to close the dialog, you can place and style it any way you want
 */
const DialogCloseButton = ({ children }) => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <button
      type="button"
      className="logiq-dialog-close"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </button>
  );
};

DialogCloseButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const Dialog = ({ defaultOpen, dialogId, children }) => (
  <DialogRoot defaultOpen={defaultOpen} dialogId={dialogId}>
    <DialogTrigger>
      Open dialog
    </DialogTrigger>

    <DialogContent>
      <DialogCloseButton>
        Close dialog
      </DialogCloseButton>

      {children}
    </DialogContent>
  </DialogRoot>
);

Dialog.propTypes = {
  defaultOpen: PropTypes.bool,
  dialogId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Dialog;
