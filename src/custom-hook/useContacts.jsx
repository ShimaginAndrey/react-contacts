import { useEffect, useState } from "react";

export const useContacts = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    const url = `https://randomuser.me/api/?results=10&_page=${currentPage}`;

    useEffect(() => {
        document.addEventListener('scroll', onScrollDocument);

        return () => {
            document.removeEventListener('scroll', onScrollDocument);
        }
    }, []);

    const onScrollDocument =  (event) => {
        let isScrollEnd = event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100;

        if(isScrollEnd) setFetching(true);
    };

    useEffect(() => {
        if(fetching) {
            const getContacts = async () => {
                try {
                    const response = await fetch(url);
                    const {results, error} = await response.json();
    
                    if(error) throw new Error(error);
    
                    setData([...data,...results]); 
                    setCurrentPage(prevState => prevState+1);
                    setError(false);
                    
                } catch (e) {
                    setError(true);
                } finally {
                    setIsLoading(false);
                    setFetching(false);
                }
            }
    
            getContacts();
        }

    }, [fetching]);

    return {
        data,
        isLoading,
        isError
    };
}