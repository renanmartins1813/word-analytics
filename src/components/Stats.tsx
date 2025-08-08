type StatProps = {
    count: number,
    label: string
}

function Stat({ count, label: name }: StatProps) {
    return (
        <section className="stat">
            <span className="stat__number">{count}</span>
            <h2 className="second-heading">{name}</h2>
        </section>
    )
}

export default function Stats() {
    return (
        <section className="stats">
            <Stat count={0} label={"WORDS"} />
            <Stat count={0} label={"CHARACTERS"} />
            <Stat count={280} label={"INSTAGRAM"} />
            <Stat count={2200} label={"FACEBOOK"} />
        </section>
    )
}

