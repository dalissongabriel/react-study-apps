import { Link } from "react-router-dom"
import { useAppSelector } from "../app/hooks"


export const Result: React.FC = () => {
    const { pizzaOrder } = useAppSelector( state => state )
    return (
        <>
            <h1>Resumo do pedido.</h1>
            <pre>{JSON.stringify(pizzaOrder, null, 2)}</pre>
            <Link to="/pizza-order/base-step">Fazer outro pedido.</Link>
        </>
    )
}