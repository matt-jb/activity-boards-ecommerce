import { IOrder } from "../../../utils/types";
import { Container, OrderControls } from "./SingleOrder.styles";

interface Props {
  order: IOrder;
}

export default function SingleOrder({ order }: Props) {
  return (
    <OrderControls>
      <Container>
        Przedmiotów w koszyku: <span>{order.order.length}</span>
      </Container>
      <Container>
        Kwota: <span>{order.total},00 zł</span>
      </Container>
      <Container>
        Status: <span>{order.status}</span>
      </Container>
    </OrderControls>
  );
}
