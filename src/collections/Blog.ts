import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slateEditor } from '@payloadcms/richtext-slate'
import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: slateEditor({}),
      required: true,
    },
  ],
  access: {
    read: ({ req }) => {
      // Allow public access
      return true;
    },
  },
}
