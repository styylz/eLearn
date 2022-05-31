import React, { useEffect } from "react";
import { fetchProductsAction } from "state/products/ProductsActions";
import { useAppDispatch } from "state/store";
import Landing from "./landing";

const Index = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  return <Landing />;
};

export default Index;
