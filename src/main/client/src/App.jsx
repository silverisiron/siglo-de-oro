import './App.css'

import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/*")
            .then((res) => res.text())
            .then((data) => setMessage(data));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
