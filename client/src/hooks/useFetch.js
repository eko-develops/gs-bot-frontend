import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error('Response is not ok from fetch...');
                }
                return res.json();
            })
            .then((data) => {
                setIsError(false);
                setIsLoading(false);
                setData(data.data);
            })
            .catch(err => {
                console.log(err)
                setIsError(true);
                setIsLoading(false);
            });
        }, 2000);
    }, [url]); //when the url changes, this useEffect will fire


    return {
        data,
        error: isError,
        loading: isLoading
    }
}

export default useFetch