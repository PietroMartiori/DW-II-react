import { useMemo, useState } from 'react';

export default function ExpensiveCalculation({ number }) {
    const calc = useMemo(() => {
        let total = 0;
        for (let i = 0; i < 1e7; i++) total += number * i;
        return total;
    }, [number]);

    return <p> Resultado: {calc}</p>;
}