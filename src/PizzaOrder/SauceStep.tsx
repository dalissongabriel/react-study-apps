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

import { chooseSauce, selectPizzaOrder } from './pizzaOrderSlice';
import { Header } from '../shared/Header';

import { PizzaOrder } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(3),
    }
  }),
);

export const SauceStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { sauce } = useAppSelector(selectPizzaOrder)
  const classes = useStyles();

  const onSubmit = ({ sauce }: PizzaOrder) => {
    dispatch(chooseSauce(sauce));
    history.push("/pizza-order/result")
  }
  return (
    <Container maxWidth="sm">
      <Header>Pedido de Pizza</Header>
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="sauce-label">Selecione o tipo de mohlo:</InputLabel>
          <Select
            fullWidth
            labelId="sauce-label"
            id="sauce"
            defaultValue={sauce}
            {...register("sauce")}
          >
            <MenuItem selected value={"no_sauce"}>Sem Molho</MenuItem>
            <MenuItem value={"white"}>Branco</MenuItem>
            <MenuItem value={"tomato"}>Tomate</MenuItem>
            <MenuItem value={"sweet"}>Doce</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary">
          Próxima etapa
        </Button>
      </form>
    </Container>
  )
}