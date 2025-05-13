function SuggestionList({suggestions}) {
    return (
        <ul>
            {suggestions.map((s) => 
                <li key={s.id}>{s.name}</li>
            )}
        </ul>
    )
}

export default SuggestionList