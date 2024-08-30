import { useState } from "react";

export default function UppercaseChecker() {
    const [inputText, setInputText] = useState('');
    const [totalCount, setTotalCount] = useState(0);
    const [lowercaseCount, setLowercaseCount] = useState(0);
    const [uppercaseCount, setUppercaseCount] = useState(0);
    const [error, setError] = useState('');
    

const countLetterA = (string) => {
    let lowercaseCount = 0;
    let uppercaseCount = 0;

    for (let text of string) {
        if (text === 'a') {
            lowercaseCount++;
        } else if (text === 'A') {
            uppercaseCount++;
        }
        }

        return { lowercaseCount, uppercaseCount };
    };

const checkLetterA = () => {
    const { lowercaseCount, uppercaseCount } = countLetterA(inputText);
        setLowercaseCount(lowercaseCount);
        setUppercaseCount(uppercaseCount);
        setTotalCount(lowercaseCount + uppercaseCount);
};

return (
    <div>
        <h1>Cheque o estado da letra "a"</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite um texto"
        />
        <button onClick={checkLetterA}>Checar</button>
        <p>A letra 'a' minúscula aparece {lowercaseCount} {lowercaseCount === 1 ? 'vez' : 'vezes'} no texto.</p>
        <p>A letra 'A' maiúscula aparece {uppercaseCount} {uppercaseCount === 1 ? 'vez' : 'vezes'} no texto.</p>
        <p>O total de letras 'a' (minúsculas e maiúsculas) é {totalCount} {totalCount === 1 ? 'vez' : 'vezes'} no texto.</p>
    </div>
)
}