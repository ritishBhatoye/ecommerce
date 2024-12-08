import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getAllProducts=async()=>
{
const ALL_PRODUCTS_QUERY=defineQuery(`
    *[
        _type=="product"
    ]|order(name asc)`);


try{
    //use sanityFetch to send the query
    const products=await sanityFetch({
        query:ALL_PRODUCTS_QUERY,
    });

    //RETURN THE LIST OF PRODUCTS , OR AN EMPTY ARRAY IF NONE ARE FOUND
    return products.data || [];
}catch(error){
    console.log("Error fetching all products : ",error);
    return [];
}
     
};  