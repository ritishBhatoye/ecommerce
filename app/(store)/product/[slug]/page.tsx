import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import React from 'react'

async function ProductPage  ({params}:{params:Promise<{slug:string;}>;})  {

    const {slug}=await params;
    const product=await getProductBySlug(slug);
  return (
    <div>
      Prodcut Page
    </div>
  )
}

export default ProductPage
