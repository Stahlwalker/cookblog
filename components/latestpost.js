// Make sure you are pulling ALL your posts from the ghost API [No limit]

function LatestPost (props) {

    const [ postNum, setPostNum] = useState(6); // Default number of posts dislplayed
  
    function handleClick() {
      setPostNum(prevPostNum => prevPostNum + 6) // 3 is the number of posts you want to load per click
    }
  
    return (
  
      <div>
      {props.posts.slice(0, postNum).map(post => (
  
        <div key={post.id}>
            //...Post Data
        </div>
      ))}
  
        <button onClick={handleClick}>Load More</button>
  
    </div>
      )
  }
  
  
  export default LatestPost