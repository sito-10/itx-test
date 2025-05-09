import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
    const { count } = useCart();
    const location = useLocation();

    return (
        <header>
            <Link to="/"><h1>📱 Tienda Móvil</h1></Link>
            <div>{location.pathname === '/' ? 'Inicio' : 'Detalles del Producto'}</div>
            <div>🛒 {count}</div>
        </header>
    );
}
