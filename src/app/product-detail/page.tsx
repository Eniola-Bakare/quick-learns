import Product from "@/components/components_local/product";
import Reviews from "@/components/components_local/reviews";
import { Suspense } from "react";

export default function ProductDetails() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback="Loading product details">
        <Product />
      </Suspense>

      <Suspense fallback="Loading reviews">
        <Reviews />
      </Suspense>
    </div>
  );
}
