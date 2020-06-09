import React, { useEffect, useState, useRef } from 'react';
import { Table } from 'semantic-ui-react';
import StockDetailsModal from './StockDetailsModal';

const StockTable = ({ update, setUpdate, newStockEntry, setNewStockEntry }) => {

    const isFirstRender = useRef(true);
    const [openModal, setOpenModal] = useState(false);
    const [selectedStock, setSelectedStock] = useState({});

    useEffect(() => {
        if (update || isFirstRender) {
            if (isFirstRender) {
                isFirstRender.current = false;
            }
            const get_stocks_request = {
                method: 'GET',
            };
            fetch('/stocks', get_stocks_request).then(res => res.json()).then(data => {
                setNewStockEntry(data);
                setUpdate(false);
            });
        }
    }, [update, setUpdate, setNewStockEntry]);

    const handleSelectRow = (stock) => {
        setSelectedStock(stock);
        setOpenModal(true);
    }

    return (
        <div>
            < Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>50 Day Moving Average</Table.HeaderCell>
                        <Table.HeaderCell>200 Day Moving Average</Table.HeaderCell>
                        <Table.HeaderCell>Forward Price to Earnings Ratio</Table.HeaderCell>
                        <Table.HeaderCell>Forward Earnings per Share</Table.HeaderCell>
                        <Table.HeaderCell>Dividend Yield</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {newStockEntry.map(stock => (
                        <Table.Row onClick={() => handleSelectRow(stock)}>
                            <Table.Cell>{stock.symbol}</Table.Cell>
                            <Table.Cell>{stock.price}</Table.Cell>
                            <Table.Cell>{stock.ma50}</Table.Cell>
                            <Table.Cell>{stock.ma200}</Table.Cell>
                            <Table.Cell>{stock.forward_pe}</Table.Cell>
                            <Table.Cell>{stock.forward_eps}</Table.Cell>
                            <Table.Cell>{stock.dividend_yield}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table >
            <StockDetailsModal stock={selectedStock} openModal={openModal} setOpenModal={setOpenModal} />
        </div >
    );
};

export default StockTable;