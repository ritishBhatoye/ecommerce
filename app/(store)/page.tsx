import { ProductsView } from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home() {
  const products=await getAllProducts();
  const categories=await getAllCategories();
  
  return ( 
    <div>
   {/* <div className=" */}
{/* // grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] */}
{/* //     "> */}
    {/* RENDER ALL THE PRODUCTS  */}
   <div
   className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">

   
    <ProductsView categories={categories} products={products}/>
   </div>
    </div>
  );
}
