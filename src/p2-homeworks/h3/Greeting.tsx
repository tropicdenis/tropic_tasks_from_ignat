import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string  // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error === "") ? "" : s.error; // need to fix with (?:)
        let disabler = (error ===  "") ? false : true;
    return (
        <div>
            <input value={name} style={{outline: "none"}}onChange={setNameCallback} className={inputClass}/>
            <button disabled={disabler} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div style={{color: "red"}}>{error}</div>
        </div>
    );
}

export default Greeting;
