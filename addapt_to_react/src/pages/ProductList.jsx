import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const filtered = products.filter(
        (p) => `${p.brand} ${p.model}`.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <SearchBar onChange={setFilter} />
            <div className="grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>
        </>
    );
}
