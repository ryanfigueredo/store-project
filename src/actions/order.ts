import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";
import { User } from "@prisma/client";

export const CreateOrder = (cartProducts: CartProduct[], user: User) => {
  const orderProducts: OrderProduct;
  await prismaClient.order.create({
    data: {
      user: user.id,
      orderProducts: {
        createMany: {},
      },
    },
  });
};
