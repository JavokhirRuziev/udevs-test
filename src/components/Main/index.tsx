import React from 'react';
import Header from './components/Header';
import Orders from './components/Orders';

const Main = () => {
    const [search, setSearch] = React.useState('');

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <Orders search={search} />
        </>
    );
};

export default Main;
