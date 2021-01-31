import React from 'react';

interface Pizza {
    id: number;
    description: string;
    name: string;
    price: number;
}

interface Props {
    pizza: Pizza;
}

const Pizza: React.FC<Props> = ({pizza}) => {
    return <div className="pizza-item">
        <ul>
            <li key={pizza.id}>
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </li>
        </ul>
    </div>
}

export default Pizza;