import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
    const [text, setText] = useState("");
    const [warningText, setWarningText] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        let newText = event.target.value;

        setWarningText("")

        if (newText.includes("<script>")) {
            newText = newText.replace("<script>", "")
            setWarningText("No script tag allowed")
        }

        if (newText.includes("&")) {
            newText = newText.replace("&", "")
            setWarningText("No special character '&' allowed")
        }

        return setText(newText);
    }
    return (
        <div className="textarea" >
            <textarea
                onChange={handleChange}
                value={text}
                placeholder="Enter your text"
                spellCheck="false"
            />
            {warningText ? <Warning warningText={warningText} /> : null}
        </div>

    )
}

