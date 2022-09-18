import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function facta(n) {
    return n ? n * facta(n - 1) : 1;
}
function runFactorial(n) {
    console.log("runFactorial");
    return facta(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render ButtonClolor");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result fact: {fact}</p>
                <button className="btn btn-primary mx-2"
                    onClick={() => setValue(prevState => prevState + 10)}
                >Incr
                </button>
                <button className="btn btn-primary mx-2"
                    onClick={() => setValue(prevState => prevState - 10)}
                >Decr
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={`btn btn-${buttonColor}`} onClick={() => setOtherState(prevState => !prevState)}>Change Color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
