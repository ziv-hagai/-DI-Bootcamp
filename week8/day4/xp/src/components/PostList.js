import a from "./data.json";

const PostList = () => {
    console.log(a)
    return (
        <>
            <h2>First</h2>
            <p>{a[0].title}</p>
            <p>{a[0].content}</p>
            <h2>Second</h2>
            <p>{a[1].title}</p>
            <p>{a[1].content}</p>
        </>
    )
}

export default PostList