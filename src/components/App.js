// create your App component here
import React, { useEffect, useState } from "react";


function App() {
    const [dogData, setDogData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((res) => {
            setDogData(res)
        })
    }, [])

    console.log(dogData.message)

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img alt="A Random Dog" src={dogData.message}/>
        </div>
    )
}

export default App

