import React from 'react'
import PropTypes from 'prop-types';

const ProductItem = ({product,showProduct}) => {
    console.log(product)
    return (
        <tr>
            <td><button className="btn btn-sm btn-danger" onClick={() => showProduct(product.name)}>Click me!</button></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><img src={product.imgSrc} alt={product.name} /></td>
        </tr>
    )
}
ProductItem.propTypes = {
    product:PropTypes.object,
    showProduct:PropTypes.func
}

export default ProductItem
