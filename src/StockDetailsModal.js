import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import StockChart from './StockChart';

const StockDetailsModal = ({ stock, openModal, setOpenModal }) => {
    const [historicalData, setHistoricalData] = useState({});
    const [loading, setLoading] = useState(true);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        if (stock.id) {
            const get_historical_request = {
                method: 'GET',
            };
            fetch(`/stocks/${stock.id}/historical`, get_historical_request).then(res => res.json()).then(data => {
                setHistoricalData(data);
                setLoading(false);
            });
        }
    }, [stock]);

    return (
        <Modal size='large' closeIcon onClose={handleCloseModal} open={openModal} centered={false}>
            <Modal.Header className='ui icon center aligned header'>{stock.symbol} Stock Historical Data</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <StockChart historicalData={historicalData} loading={loading} />
                </Modal.Description>
            </Modal.Content>
        </Modal >
    );
};

export default StockDetailsModal;