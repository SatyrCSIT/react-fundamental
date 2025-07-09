import { useState } from "react";
import type { ProductInterface } from "~/interface/productinterface";
import Productbox from "./productbox";

export default function Productlist() {
    const productList = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: (index + 1) * 100
    }))
    const [products, setProduct] = useState<ProductInterface[]>(productList)
    return (
        <div>
            <h1>Product List</h1>
            <div className="grid grid-cols-6 gap-4">
                {products.map((product) => (
                    <Productbox key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}