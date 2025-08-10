type StatProps = {
    count: number,
    label: string
}

type StatsProps = {
    numberOfCharacters: number,
    numberOfWords: number,
    instagramCharactersLeft: number,
    facebookCharactersLeft: number
}

function Stat({ count, label: name }: StatProps) {

    return (
        <section className="stat">
            <span className={`stat__number ${count < 0 ? "stat__number--limit" : ""} `}>{count}</span>
            <h2 className="second-heading">{name}</h2>
        </section>
    )
}

export default function Stats({
    numberOfCharacters,
    numberOfWords,
    instagramCharactersLeft,
    facebookCharactersLeft }: StatsProps) {
    console.log(numberOfCharacters);

    return (
        <section className="stats">
            <Stat count={numberOfWords} label={"WORDS"} />
            <Stat count={numberOfCharacters} label={"CHARACTERS"} />
            <Stat count={instagramCharactersLeft} label={"INSTAGRAM"} />
            <Stat count={facebookCharactersLeft} label={"FACEBOOK"} />
        </section>
    )
}

