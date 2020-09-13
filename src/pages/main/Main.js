import React, {Component} from 'react';
import api from '../../services/api';
import Router from '../../routes'
import { Link } from 'react-router-dom';


import '../main/main.css'

export default class Main extends Component {
    state = {
        products:[],
        productsInfo: {},
        page: 1
    }

    componentDidMount(){
        this.loadProducts();
    }
    loadProducts = async (page = 1) => {
            const response = await api.get(`/products?page=${page}`);

            const {docs, ...productsInfo } = response.data;

            this.setState({products: docs, productsInfo, page});
    };

    prevPage = () => {
        const {page,productsInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }


    nextPage = () => {
        const {page,productsInfo } = this.state;

        if (page === productsInfo) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page, productsInfo } = this.state;
    
        return (
        <div className="product-list">
            {products.map(products =>(
                <article key={products._id}>
                    <strong>{products.title}</strong>
                    <p>{products.description}</p>

                    <Link to={`/products/${products._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productsInfo.page} onClick={this.nextPage}>Próximo</button>
            </div>
        </div>
    )
    }
}