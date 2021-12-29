import React, {useEffect, useState} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });
            console.log(data);
            setResults(data.query.search);
        };
        // only search if term is not empty
        if (term) {
            search();
        }
    }, [term]); // 2nd arguement controls when useEffect() is executed

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search