import React from 'react';
import Item from './Item';
import Table from 'react-bootstrap/Table';

const ItemList = ({productsList, addItem}) => {  //donde se imprime la lista de productos

    return (
        <Table hover className="mt-3 itemList">
            {productsList.map(product =>(
                <Item key={product.id} product={product} addItem={addItem}/>
            ))}
        </Table>
    )
}

export default ItemList;
