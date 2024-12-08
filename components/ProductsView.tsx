import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";



interface ProductsViewProps{
    products:Product[];
    categories:Category[];
}

export const ProductsView=({products,categories}:ProductsViewProps)=>{
    return <div className="flex flex-col ">
        {/* categories */}
        <div className="w-full sm:w=[200px]">

        </div>
        {/* Products */}

        {/* ProductsView */}
        <div>
            <div className="flex-1">
                <ProductGrid products={products}/>

                <hr className="w-1/2 sm:w-3/4 "/>
            </div>
        </div>
        </div>
}