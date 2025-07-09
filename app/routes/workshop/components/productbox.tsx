import type { ProductInterface } from "~/interface/productinterface";

export default function Productbox({ product }: { product: ProductInterface }) {
    return (
        <div key={product.id} className="border border-black p-4 rounded-md">
            <h2>{product.name}</h2>
            <i className="fa-solid fa-image text-4xl"></i>
            <p>Price: ${product.price}</p>
        </div>
    )
}