import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Chart from './StockHistoricalChart';

const StockDetailsModal = ({ stock, openModal, setOpenModal }) => {
    console.log("inside Modal", openModal, stock);
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <Modal closeIcon onClose={handleCloseModal} open={openModal} centered={false}>
            <Modal.Header>{stock.symbol} Stock Historical Data</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Historical Chart</Header>
                    <Chart />
                </Modal.Description>
            </Modal.Content>
        </Modal >
    )
};

export default StockDetailsModal;