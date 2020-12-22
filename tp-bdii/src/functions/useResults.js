import { useState } from 'react';

export default function useResults() {

    const getResults = () => {
        const resultsString = localStorage.getItem('results');
        return resultsString;
    }

    const [results, setResults] = useState(getResults());

    const saveResults = results => {
        localStorage.setItem('results', results);
        setResults(results);
    }

    return {
        setResults: saveResults,
        results: results
    }
}