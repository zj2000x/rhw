import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import Card from '../Card/Card';
import Title from '../Title/Title';
import './CardsWrapper.css';

const CardsWrapper = () => {
    const data = useContext(MainContext);

    return (
        <div className="CardsWrapper Wrapper">
            <Title text="Results" />
            { data.map(item => <Card key={item.id} item={item} />) }
        </div>
    )
}

export default CardsWrapper;
