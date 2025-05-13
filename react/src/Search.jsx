import { useEffect, useState } from "react"
import SuggestionList from "./components/SuggestionList"

function Search({items}){
    const [searchText, setSearchText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name))

    useEffect(() => {
        let calculatedSuggestions = []
        sortedItems.forEach(item => {
            if (calculatedSuggestions.length == 10) return
            if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
                calculatedSuggestions.push(item)
            }
        });

        setSuggestions(calculatedSuggestions)
    }, [searchText])

    return (
        <>
            <input type="text" onChange={(e)=> setSearchText(e.target.value)}/>
            <SuggestionList suggestions={suggestions} />
        </>
    )
}

export default Search