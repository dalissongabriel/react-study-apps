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

import { chooseBase, selectPizzaOrder } from './pizzaOrderSlice';
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


export const BaseStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { base } = useAppSelector(selectPizzaOrder)
  const classes = useStyles();

  const onSubmit = ({ base }: PizzaOrder) => {
    dispatch(chooseBase(base));
    history.push("/pizza-order/crust-step")
  }
  return (
    <Container maxWidth="sm">
      <Header>Pedido de Pizza</Header>
      <form className={classes.flex} noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="base-label">Selecione o tamanho:</InputLabel>
          <Select
            fullWidth
            labelId="base-label"
            id="base"
            defaultValue={base}
            {...register("base")}
          >
            <MenuItem selected value={"small"}>Pequena</MenuItem>
            <MenuItem value={"medium"}>Média</MenuItem>
            <MenuItem value={"large"}>Família</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary">Próxima
          etapa
        </Button>
      </form>
    </Container>
  )
}