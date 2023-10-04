// per default is a server component
export default async function TodoPage() {
    const allPosts = await fetch('http://localhost:3000/api/todos')
                        .then((response) => response.json())
    return (
        <div>
            <h1>Todos Page</h1>
            <ul>
                {allPosts.map(post => {
                    return <li>{post.id} {post.title} {post.userId} </li>
                })}
            </ul>
        </div>
    )
}