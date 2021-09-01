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

import { chooseCrust, selectPizzaOrder } from './pizzaOrderSlice';
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


export const CrustStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { crust } = useAppSelector(selectPizzaOrder)
  const classes = useStyles();

  const onSubmit = ({ crust }: PizzaOrder) => {
    dispatch(chooseCrust(crust));
    history.push("/pizza-order/cheese-step")
  }
  return (
    <Container maxWidth="sm">
      <Header>Pedido de Pizza</Header>
      <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="crust-label">Selecione o tipo de borda:</InputLabel>
          <Select
            fullWidth
            labelId="crust-label"
            id="crust"
            defaultValue={crust}
            {...register("crust")}
          >
            <MenuItem selected value={"simple"}>Simples</MenuItem>
            <MenuItem value={"tie_edge"}>Gravata borboleta</MenuItem>
            <MenuItem value={"rope"}>Corda</MenuItem>
            <MenuItem value={"star"}>Estrela</MenuItem>
            <MenuItem value={"volcano"}>Vulcão</MenuItem>
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