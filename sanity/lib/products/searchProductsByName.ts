import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

 export const searchProductsByName=async (searchParam:string)=>{
    const PRODUCT_SEARCH_QUERY=defineQuery(`
        *[
            _type=="product"
            && name match $searchParam
        ] | order(name asc) 
        `);

        try{
            //use sanityFetch to send the query and pass the search parameter with wildcard

            const products = await sanityFetch({
                query:PRODUCT_SEARCH_QUERY,
                params:{
                    searchParam:`${searchParam}*`
                },
            });

            return products.data||[];
        } catch(error){
            console.error("Erro fetching products by name : ",error);
            return [];
        }
 };