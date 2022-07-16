// Booklist.jsx
import { useState, useEffect } from "react";

export const Booklist = ({ language, getData}) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = getData?.(language).then((response) =>
            setBookData(response)
        );
    }, [language, getData]);

    return (
        <ul>
            <p>this is {JSON.stringify(bookData)} list component</p>
            {/* {bookData.data.map((x, index) =>(
                <li key={index}>{x.objectIDs}</li>
            ))} */}
        </ul>
    );
  };