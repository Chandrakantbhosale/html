import { useEffect } from "react";
import { useState } from "react";

function ChildComponent() {

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect( function() {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(httpResponce => httpResponce)
        .then((resp) => {
            setData(resp);
            setLoading(false);
        })
        .catch(error => console.log(error));
    }, [data])
    

    return (
        <>
            {
                loading ? (<p>Loading...</p>):
                data.map(function(item){
                    
                })

                
            }
        </>
    )
}

export default function Welcome() {

    return (
        <>
            <ChildComponent />
            
        </>
    )
}