import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import { chooseCheese } from './pizzaOrderSlice';
import { PizzaOrder } from './types';

export const CheeseStep: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ cheese }: PizzaOrder) => {
        dispatch(chooseCheese(cheese));
        history.push("/pizza-order/sauce-step")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="cheese">Selecione o tipo de queijo:</label>
                <select id="cheese" {...register("cheese")}>
                    <option value="mozzarela">Mozzarella</option>
                    <option value="provolone">Provolone</option>
                    <option value="gorgonzola">Gorgonzola</option>
                    <option value="parmesan">Parmesão</option>
                </select>
            </div>
            <button>Próxima etapa</button>
        </form>
    )
}