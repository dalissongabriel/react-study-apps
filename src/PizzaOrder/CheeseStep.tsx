import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import {
  Button,
  Container,
  createStyles,
  Theme,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  FormControl
} from '@material-ui/core';

import { chooseCheese, selectPizzaOrder } from './pizzaOrderSlice';
import { Header } from '../shared/Header';

import { PizzaOrder } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(2),
    }
  }),
);

export const CheeseStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { cheese } = useAppSelector(selectPizzaOrder)
  const classes = useStyles();

  const onSubmit = ({ cheese }: PizzaOrder) => {
    dispatch(chooseCheese(cheese));
    history.push("/pizza-order/sauce-step")
  }

  const handleCancel = () => {
    history.push('/pizza-order/crust-step');
  }

  return (
    <Container maxWidth="sm">
      <Header>Pedido de Pizza</Header>
      <form className={classes.flex} noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="cheese-label">Selecione o tipo de queijo:</InputLabel>
          <Select
            fullWidth
            labelId="cheese-label"
            id="cheese"
            defaultValue={cheese}
            {...register("cheese")}
          >
            <MenuItem selected value={"mozzarela"}>Mozzarella</MenuItem>
            <MenuItem value={"provolone"}>Provolone</MenuItem>
            <MenuItem value={"gorgonzola"}>Gorgonzola</MenuItem>
            <MenuItem value={"parmesan"}>Parmesão</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary">
            Próxima etapa
        </Button>
        <Button
          className={classes.button}
          onClick={handleCancel}
          variant="contained"
          color="secondary">
          Voltar
        </Button>
      </form>
    </Container>
  )
}