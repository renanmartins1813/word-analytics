import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
    const [text, setText] = useState("");

    const stats = {
        numberOfCharacters: text.length,
        numberOfWords: text.split(" ").filter((word) => word !== "").length,
        instagramCharactersLeft: 280 - text.length,
        facebookCharactersLeft: 2200 - text.length,
    }

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Stats stats={stats} />
        </main>
    )
}

