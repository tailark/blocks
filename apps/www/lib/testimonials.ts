type Testimonial = {
    avatar : string
    name : string
    handler? : string
    post : string
    link : string
    certified:boolean
    org?:boolean
}

export const testimonials:Testimonial[] = [
    {
        avatar : "/avatars/rauchg.jpg",
        name : "Guillermo Rauch",
        handler : "rauchg",
        post : "the cooking continues",
        link : "https://x.com/rauchg/status/1963251190373728308",
        certified : true
    },
    {
        avatar : "/avatars/shadcn.jpg",
        name : "shadcn",
        handler : "shadcn",
        post : "One of my favorite registries.",
        link : "https://x.com/shadcn/status/1961131365157543991",
        certified : true
    }
]