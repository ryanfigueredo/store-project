import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          className="h-90 w-auto max-w-[90%]"
          sizes="100vw"
          style={{ objectFit: "contain" }}
          height={0}
          width={0}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex w-full items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">R${product.totalPrice.toFixed(2)}</p>

              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                R${Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R${product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
