import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error('Could not fetch...');
            }
            return res.json();
        })
        .then((data) => {
            setData(data.data);
        })
        .catch(err => console.log(err))
    }, [url]); //fire the useEffect only once on first render


    return {
        data
    }
}

export default useFetch