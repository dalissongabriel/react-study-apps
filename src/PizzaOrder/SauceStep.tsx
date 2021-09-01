import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import { chooseSauce } from './pizzaOrderSlice';
import { PizzaOrder } from './types';

export const SauceStep: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ sauce }: PizzaOrder) => {
        dispatch(chooseSauce(sauce));
        history.push("/pizza-order/result")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="sauce">Selecione o tipo de molho:</label>
                <select id="sauce" {...register("sauce")}>
                    <option value="no_sauce">Sem molho</option>
                    <option value="tomato">Tomate</option>
                    <option value="white_sauce">Branco</option>
                    <option value="sweet_sauce">Doce</option>
                </select>
            </div>
            <button>Próxima etapa</button>
        </form>
    )
}