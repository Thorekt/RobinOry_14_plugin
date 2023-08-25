import React, { useState } from "react";
import { Modal } from "../lib";
import "./App.css";

export default function App() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const openModal2 = () => {
        setShowModal2(true);
    };

    const closeModal2 = () => {
        setShowModal2(false);
    };

    const modalClassNames = {
        container: "example-modal-container",
        content: "example-modal-content",
        header: "example-modal-header",
        title: "example-modal-title",
        close: "example-modal-close",
        body: "example-modal-body",
    };

    

    return (
        <>
        <button onClick={openModal}>Open Modal without clasnames</button>
        <Modal title="Modale without clasnames" isModalOpen={showModal} onClickClose={closeModal} >
            <p>body of modal without clasnames</p>
            <span>A span</span>
        </Modal>

        <button onClick={openModal2}>Open Modal with clasnames</button>
        <Modal title="Modal with classnames" isModalOpen={showModal2} onClickClose={closeModal2} classNames={modalClassNames} >
            <p>body of modale with clasnames</p>            
            <span>A span</span>
        </Modal>
        </>
    );
}