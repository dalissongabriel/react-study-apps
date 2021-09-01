import { useAppDispatch } from '../app/hooks'; 
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import { chooseCrust } from './pizzaOrderSlice';
import { PizzaOrder } from './types';

export const CrustStep: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ crust }: PizzaOrder) => {
        dispatch(chooseCrust(crust));
        history.push("/pizza-order/cheese-step")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="crust">Selecione a borda:</label>
                <select id="crust" {...register("crust")}>
                    <option value="simple">Simples</option>
                    <option value="tie_edge">Gravata borboleta</option>
                    <option value="rope">Corda</option>
                    <option value="star">Estrela</option>
                    <option value="volcano">Vulcão</option>
                </select>
            </div>
            <button>Próxima etapa</button>
        </form>
    )
}