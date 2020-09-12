import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount(){
        this.loadProducts();
    }
    loadProducts = async () => {
            const response = await api.get("react");

            console.log(response.data.hits);
    };

    render() {
        return <h1>Hello vanessa</h1>
    }
}