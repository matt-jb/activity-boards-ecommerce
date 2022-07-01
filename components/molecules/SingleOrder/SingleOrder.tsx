import { IOrder } from "../../../utils/types";
import { Container, OrderControls } from "./SingleOrder.styles";

interface Props {
  order: IOrder;
}

export default function SingleOrder({ order }: Props) {
  return (
    <OrderControls>
      <Container>
        Kupione przedmioty:
        {order.order.map((purchase) => {
          return (
            <p key={purchase.item.name}>
              <span>{purchase.item.name} </span>({purchase.qty})
            </p>
          );
        })}
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
