export default {
    title: "Oppskrift",
    name: "recipe",
    type: "document",
    fields: [
        {
            title: "Tittel",
            name: "title",
            type: "string"
        },
        {
            title: "Beskrivelse",
            name: "description",
            type: "text"
        },
        {
            title: "Vegetar?",
            name: "vegetarian",
            type: "boolean"
        }
    ]
}