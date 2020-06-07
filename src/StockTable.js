import React, { useEffect, useState } from 'react';
import { Input, Table } from 'semantic-ui-react';

const StockTable = ({ update, setUpdate }) => {
    // should get new id of the stock
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const get_stocks_request = {
            method: 'GET',
        };
        fetch('/stocks', get_stocks_request).then(res => res.json()).then(data => { setStockData(data) });
        console.log(stockData);
    })

    return (
        < Table celled >
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
                {stockData.map(stock => (
                    <Table.Row>
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
    );
};

export default StockTable;