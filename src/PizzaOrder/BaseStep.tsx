import { useAppDispatch } from '../app/hooks'; 
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import { chooseBase } from './pizzaOrderSlice';
import { PizzaOrder } from './types';

export const BaseStep: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = ( { base }: PizzaOrder) => {
        dispatch(chooseBase(base));
        history.push("/pizza-order/crust-step")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="base">Selecione a base:</label>
                <select id="base" {...register("base")}>
                    <option value="small">Pequena</option>
                    <option value="medium">Média</option>
                    <option value="large">Família</option>
                </select>
            </div>
            <button>Próxima etapa</button>
        </form>
    )
}