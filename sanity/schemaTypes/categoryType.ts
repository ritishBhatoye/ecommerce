import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: "title",
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
  preview:{
    select:{
        title:"title",
        media:"image",
        price:"price",
    },
    prepare(select){
        return{
            title:select.title,
            subtitle:`$${select.price}`,
            media:select.media,
        }
    }
}
})
