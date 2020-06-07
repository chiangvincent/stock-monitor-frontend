import React, { useEffect, useState } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

const AddStockForm = ({ stock, setStock }) => {
    // const [stock, update] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(stock);
        const add_stock_request = {
            method: 'POST',
            body: JSON.stringify({
                symbol: stock
            })
        };
        fetch('/stocks', add_stock_request);
        setStock('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Input type=' text' data-parse='uppercase'
                    placeholder='Add Stock...' value={stock}
                    onChange={e => setStock(e.target.value)} />
                <Button action='submit'>Submit</Button>
            </Form.Group>
        </Form>
    );
};

export default AddStockForm;
