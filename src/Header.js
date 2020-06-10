import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const StockHeader = () => (
    <div>
        <Header as='h1' icon textAlign='center'>
            < Icon name='line chart' circular />
            <Header.Content>Stock Monitor</Header.Content>
        </Header >
    </div >
);

export default StockHeader;
