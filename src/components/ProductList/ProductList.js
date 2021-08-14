import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  // console.log(products)
  const showProduct = (x) => {
    alert("the product name is "+x)
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>price</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
         {
             products.map((product,index) => <ProductItem product={product} key={index} showProduct={showProduct}/>)

             
         }
        </tbody>
      </Table>
    </div>
  );
};
ProductList.propTypes = {
    products:PropTypes.array
}
export default ProductList;
