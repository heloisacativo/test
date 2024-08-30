import { useState } from "react";

export default function FibonacciChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [isInFibonacci, setIsInFibonacci] = useState(null);
    const [error, setError] = useState('');

const generateFibonacci = (limit) => {
    const sequence = [0, 1];
    while (sequence[sequence.length - 1] <= limit) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length -2]
        sequence.push(next)
    }
    return sequence;
}

const checkFibonacci = (number) => {
    const fibonacciSequence = generateFibonacci(number);
    return fibonacciSequence.includes(number);
};

const Check = () => {
    const number = parseInt(inputNumber, 10);
    if(isNaN(number)) {
        setError('Por favor, digite um número válido.');
        setIsInFibonacci(null);
    } else {
        setError('');
        setIsInFibonacci(checkFibonacci(number));
    }
};

return (
    <div>
        <h1>Cheque se é um sequência Fibonnaci</h1>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Digite um número"
        />
        <button onClick={Check}>Checar</button>
        {error && <p>{error}</p>}
        {isInFibonacci !== null && !error && (
            <p>{isInFibonacci ? `O número ${inputNumber} é uma sequência Fibonacci!` : `O número ${inputNumber} não é uma sequência Fibonacci`} </p>
        )}
    </div>
)
}