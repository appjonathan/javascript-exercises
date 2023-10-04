export async function GET(request) {
    const allPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then((response) => response.json())
                        // return res.json()
                        // return res.send()
                        // return res.sendFile()
                        // return res.redirect("/")
    return Response.json(allPosts)
    //return Response.redirect("https://www.google.com")
    //return Response.json({message: "from my get method"})
} 

export async function POST(request) {
   return Response.json({message: "from my post method "}) 
}