import React from 'react';
import Button from 'react-bootstrap/Button';

const Item = ({product, addItem}) => {
    return (
        <tbody>
            <tr>
                <td>{product.icon} {product.name}</td>
                <td>${product.price}</td>
                <Button variant="secondary" className="my-2" onClick={()=> addItem(product)}>Comprar</Button>
            </tr>
        </tbody>
    )
}

export default Item;
