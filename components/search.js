/**
 *
 * fetch api to our endpoint ('api/Elasticsearch' acts like an endpoint)
 *
 */
 const ListLayout = ({ posts, title, pagination }) => {
    const [searchValue, setSearchValue] = useState('')
      const [filteredPosts, setFilteredPosts] = useState([])
      const [loading, setLoading] = useState(false)//add loading indicator for fetch states(pending to success)
      const [success, setSuccess] = useState(null)
      const query = useDebouncedValue(searchValue, 600)//not the typed value but-
                                                      
    
    useEffect(() => {
        if (query) {
          setLoading(true)
          fetch('/api/Elasticsearch', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
          }).then((res) =>
            res
              .json()
              .then((data) => {
                setSuccess(true)
                setFilteredPosts(data)
                setLoading(false)
              })
              .catch((err) => {
                open()
                //setAlertMessage(err.message)
                setSuccess(false)
                setLoading(false)
                setFilteredPosts(posts) //if there is error
              })
          )
        } else {
          setFilteredPosts(posts)//if no search string
        }
      }, [query])
      const handleChange = (e) => {
        setSearchValue(e.target.value)
      }
    
    
    return(
    
    
         <div className="relative flex items-center max-w-lg">
                <Search className="absolute top-4 left-2 text-gray-400 " />
                <Input
                  aria-label="Search articles"
                  className="pl-12"
                  type="text"
                  onChange={handleChange}
                  placeholder="Search articles"
                />
              </div>
    
    )
    }
    