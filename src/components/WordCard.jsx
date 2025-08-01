function WordCard({word, meaning, pronunciation, example}) {
    return (
        <div className="word-card">
            <h2>{word}</h2>
            <p className="pronunciation">{pronunciation}</p>
            <p className="meaning">{meaning}</p>
            <div className="example">
                <p><strong>Example:</strong> {example}</p>
            </div>
        </div>
    );
}

export default WordCard;