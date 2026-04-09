'use client';

import { useState } from "react";

export default function Test() {

    const [answer, setAnswer] = useState("");
    const [active, setActive] = useState(false);

    let timeExceed = answer.slice (0, 140);

    return (
        <div className="mainCont">
            <h2>City Quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water ?</p>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <textarea name="" id="" value={timeExceed} onChange={(e) => setAnswer(e.target.value)}></textarea>
                <button disabled={answer.length === 0 || answer.length > 140} onClick={() => setActive(true)}>Submit</button>
                <p className="answer"></p>
            </form>
            <div className={`popup ${active ? "" : "d-none"}`} ><p className="close-btn" onClick={() => setActive(false)}>Close</p><p>Message Sent Sucessfuly</p></div>
        </div>
    )
}