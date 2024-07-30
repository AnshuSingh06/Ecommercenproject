import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '' });
  const [editProduct, setEditProduct] = useState({ id: '', name: '', description: '', price: '', stock: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddProduct = () => {
    axios.post('http://localhost:5000/api/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setNewProduct({ name: '', description: '', price: '', stock: '' });
      })
      .catch(error => console.error(error));
  };

  const handleUpdateProduct = () => {
    axios.put(`http://localhost:5000/api/products/${editProduct.id}`, {
      name: editProduct.name,
      description: editProduct.description,
      price: editProduct.price,
      stock: editProduct.stock
    })
      .then(response => {
        const updatedProducts = products.map(product => 
          product._id === editProduct.id ? response.data : product
        );
        setProducts(updatedProducts);
        setEditProduct({ id: '', name: '', description: '', price: '', stock: '' });
        setIsEditing(false);
      })
      .catch(error => console.error(error));
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Products</h2>

      <div>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {isEditing && (
        <div>
          <h3>Edit Product</h3>
          <input
            type="text"
            placeholder="Name"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={editProduct.description}
            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Stock"
            value={editProduct.stock}
            onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}

      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => {
              setEditProduct({
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
              });
              setIsEditing(true);
            }}>Edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
