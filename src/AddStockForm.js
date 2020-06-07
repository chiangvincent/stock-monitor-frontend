import React, { useEffect, useState } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

const AddStockForm = ({ update, setUpdate, loading, setLoading }) => {
    const [stock, setStock] = useState('');

    const handleSubmit = e => {
        setLoading(true);
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
        setUpdate(true);
    };
    console.log("rendering add stock form", loading);
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Input type=' text' data-parse='uppercase'
                    placeholder='Add Stock...' value={stock}
                    onChange={e => setStock(e.target.value)} />
                {update ? <Button loading>Loading</Button> : <Button action='submit'>Submit</Button>}
            </Form.Group>
        </Form>
    );
};

export default AddStockForm;
