import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const ref = useRef();

    const handleClickFocus = () => {
        ref.current.focus();
    };
    const handleClickWidth = () => {
        ref.current.style.width = "150px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <input ref={ref} type="text" id="email" className="form-control"/>
            <button className="btn btn-primary" onClick={handleClickFocus}>Фокус</button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
