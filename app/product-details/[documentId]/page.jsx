"use client";
import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "@/app/_components/ProductList";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const path = usePathname();
  console.log("Received documentId:", params?.documentId);

  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (params?.documentId) {
      getProductByDocumentId_();
    }
  }, [params?.documentId]);

  const getProductByDocumentId_ = () => {
    ProductApis.getProductByDocumentId(params?.documentId).then((res) => {
      const product = res?.data?.data?.[0]; // نأخذ أول منتج من النتائج
      console.log("product item", product);
      setProductDetails(product);
      getProductListByCategory(product);
    });
  };

  const getProductListByCategory = (product) => {
    ProductApis.getProductsByCategory(product?.category).then((res) => {
      console.log(res?.data?.data);
      setProductList(res?.data?.data);
    });
  };

  return (
    <div className="px-10 md:px-28 py-8">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 justify-around gap-5 sm:gap-0">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-8 sm:grid-cols-2 text-[21px] font-bold">
          Similar Products
        </h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
