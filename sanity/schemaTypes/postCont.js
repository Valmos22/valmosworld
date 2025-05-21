import { defineArrayMember, defineField, defineType } from 'sanity'

export const postCont = defineType({
    name: 'postCont',
    title: 'Post con videos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Título',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'videoUrl',
            type: 'url',
            title: 'URL del video de YouTube',
            description: 'Pega aquí el enlace del video de YouTube relacionado.',
        }),
        defineField({
            name: 'txtDescription',
            type: 'blockContent',
            title: 'Descripción',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Imagen principal',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Nombre imagen',
                }),
            ],
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Fecha de publicación',
        }),
        defineField({
            name: 'categories',
            type: 'array',
            title: 'Categorías',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{ type: 'category' }],
                }),
            ],
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
            title: 'Contenido',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
})
