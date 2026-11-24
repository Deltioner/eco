import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";

function ProductInfo({ product }) {
  return (
    <div>
      {product.id ? (
        <div>
          <h2 className="text-[20px]">{product?.title}</h2>
          <h2 className="text-[15px] text-gray-400">{product?.category}</h2>
          <h2 className="text-[15-px] mt-5">
            {product?.description?.[0]?.children?.[0]?.text}
          </h2>

          <h2 className="flex gap-2 mt-2 text=[11px] text-gray-500">
            {product?.instantDelivery ? (
              <BadgeCheck className="text-green-500 w-5 h-5" />
            ) : (
              <AlertOctagon />
            )}
            Eligable For Instant Delivery
          </h2>

          <h2 className="text-[32px] text-teal-600 mt-3">€{product?.price}</h2>
          <button
            className="flex gap-2 p-3
        text-white bg-teal-800 hover:bg-teal-400
        rounded-lg"
          >
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
