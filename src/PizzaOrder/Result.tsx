import { Container, makeStyles, Paper, Typography, Theme, Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

const useStyles = makeStyles((theme: Theme)=>({
  paper: {
    padding: theme.spacing(2),
  }
}))
export const Result: React.FC = () => {
  const history = useHistory();
  const { pizzaOrder } = useAppSelector(state => state);
  const classes = useStyles();

  const handleClick = () => {
    history.push("/pizza-order/base-step");
  }

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper} elevation={3}>
        <Typography
          component="h2"
          color="secondary">
            Resumo do pedido.
        </Typography>
        <pre>{JSON.stringify(pizzaOrder, null, 2)}</pre>
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary">
          Fazer outro pedido
        </Button>
      </Paper>
    </Container>
  )
}