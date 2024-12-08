import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesTypes=defineType ({
    name:"sale",
    title:"Sale",
    type:"document",
    icon:TagIcon,
    fields:[
        defineField({
            name:"title",
            type:"string",
            title:"Sale Title",

        }),
        defineField({
            name:"description",
            type:"text",
            title:"Sale Description"

        }),
        defineField({
            name:"discount/Amount",
            type:"number",
            title:"Discount Amount",
            description:"Amount off in percentage or fixed values",
        })
    ]
})