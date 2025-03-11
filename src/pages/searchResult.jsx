import { useParams } from "react-router-dom";

const SearchResult = () => {
    const {query}=useParams();
    return (
        <>
            <p> SearchResult  page..</p>
            <p>{query}</p>
        </>
    );
  };
  
  export default SearchResult;
  