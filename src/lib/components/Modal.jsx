import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import close from './close-icon.svg';

/**
 * Modal component (modal)
 * @description Renders a editable modal
 * @param {string} title - Modal title (required), a string to be displayed as modal title
 * @param {node} children - Modal content, nodes to be displayed as modal content
 * @param {function} onClickClose - Function to close modal (required), a function to be called when close button is clicked
 * @param {boolean} isModalOpen - Modal state, a boolean to indicate if modal is open or not
 * @param {object} classNames - Custom classNames, an object with custom classNames for modal
 * @param {string} classNames.container - Custom classNames for modal-container, a string with custom classNames for modal-container
 * @param {string} classNames.content - Custom classNames for modal-body, a string with custom classNames for modal-body
 * @param {string} classNames.header - Custom classNames for modal-header, a string with custom classNames for modal-header
 * @param {string} classNames.title - Custom classNames for modal-title, a string with custom classNames for modal-title
 * @param {string} classNames.close - Custom classNames for modal-close, a string with custom classNames for modal-close button
 * @param {string} classNames.body - Custom classNames for modal-content, a string with custom classNames for modal-content
 * @returns {JSX.Element}
 */
export default function Modal({
  title, children, onClickClose, isModalOpen, classNames,
}) {
  const containerClassNames = `${isModalOpen ? 'active' : ''} ${classNames.container} modal-container`;
  const bodyClassNames = `${classNames.body} modal-body`;
  const headerClassNames = `${classNames.header} modal-header`;
  const titleClassNames = `${classNames.title} modal-title`;
  const closeClassNames = `${classNames.close} modal-close`;
  const contentClassNames = `${classNames.content} modal-content`;
  return (
    <div className={containerClassNames}>
      <div className={bodyClassNames}>
        <header className={headerClassNames}>
          <h3 className={titleClassNames}>{title}</h3>
          <button type="button" className={closeClassNames} onClick={onClickClose}>
            <img src={close} alt="close modal button" />
          </button>
        </header>
        <div className={contentClassNames}>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClickClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    content: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
    close: PropTypes.string,
    body: PropTypes.string,
  }),
};

Modal.defaultProps = {
  classNames: {
    container: '',
    content: '',
    header: '',
    title: '',
    close: '',
    body: '',
  },
};
