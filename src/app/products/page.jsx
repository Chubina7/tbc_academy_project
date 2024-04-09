"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProductsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <div>Redirecting to the home page...</div>;
};

export default ProductsPage;
