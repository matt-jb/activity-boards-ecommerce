import { IOrder } from "../../../utils/types";
import SingleOrder from "../../molecules/SingleOrder/SingleOrder";
import { NoOrders, OrdersWrapper } from "./OrdersList.styles";

interface Props {
  orders: Array<IOrder>;
}

export default function OrdersList({ orders }: Props) {
  if (orders.length === 0)
    return <NoOrders>Nie kupiłeś jeszcze niczego w naszym sklepie.</NoOrders>;

  return (
    <OrdersWrapper>
      {orders.map((order, i) => (
        <SingleOrder key={i} order={order} />
      ))}
    </OrdersWrapper>
  );
}
