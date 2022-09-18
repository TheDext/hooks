import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleState = () => {
        setOtherState(prev => prev === "false" ? "true" : "false");
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>PrevState: {prevState.current}</p>
            <p>CurrentState: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleState}>Изменить</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
