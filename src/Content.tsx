interface Props {
    text: string
    text2: string
    year: number
}

const Content = (props: Props) => {
    return (
        <>
            <div>
                <span>
                    {props.text}
                    {props.text2}
                </span>
                <p>{props.year}</p>
            </div>
        </>
    )
}

export default Content
