import React from 'react';
import { Input, Table } from 'semantic-ui-react';

const StockTable = () => (
    <Table celled>
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
            <Table.Row>
                <Table.Cell>No Name Specified</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                <Table.Cell negative>None</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jimmy</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                <Table.Cell positive>Hello </Table.Cell>
            </Table.Row>
            <Table.Row negative>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default StockTable;