import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal})
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
                if(err.name === 'AbortError'){
                    console.log('fetch aborted..');
                } else {
                    setIsError(true);
                    setIsLoading(false);
                }
            });
        }, 800);


        return () => abortCont;
    }, [url]); //when the url changes, this useEffect will fire


    return {
        data,
        error: isError,
        loading: isLoading
    }
}

export default useFetch