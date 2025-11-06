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

export const mistTestimonials:Testimonial[] = [
     {
        avatar : "/avatars/frank.jpg",
        name : "Frank",
        handler : "FrankCodeZ",
        post : "I hope you won't stop now - I must say, these are the best I have seen <3 Huge Props",
        link : "https://x.com/FrankCodeZ/status/1894058732482342981",
        certified:false
    },
    {
        avatar : "/avatars/dave.jpg",
        name : "Dave",
        handler : "daveindiedev",
        post : "Thank you so much. I'm a big fan of ShadCN UI, and I'm really happy that you created it. 🎉",
        link : "https://x.com/daveindiedev/status/1894255352021225480",
        certified:true
    },
]