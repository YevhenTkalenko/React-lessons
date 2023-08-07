import './Content.scss'

interface Props {
    text: string
    text2: string
    year: number
}

export const Content = (props: Props) => {
    return (
        <>
            <div>
                <p className="content">{props.text}</p>
                <p>{props.text2}</p>
                <p>{props.year}</p>
            </div>
        </>
    )
}
