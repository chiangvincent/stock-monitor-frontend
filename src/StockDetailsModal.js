import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const StockDetailsModal = ({ stock, openModal, setOpenModal }) => {
    console.log("inside Modal", openModal, stock);
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <Modal closeIcon onClose={handleCloseModal} open={openModal} >
            <Modal.Header>{stock.symbol}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Stock Info</Header>
                </Modal.Description>
            </Modal.Content>
        </Modal >
    )
};

export default StockDetailsModal;