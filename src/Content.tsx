interface Props {
    text: string
    text2: string
    year: number
}
export const Content = (props: Props) => {
    return (
        <>
            <div>
                <p
                    style={{
                        color: 'white',
                        backgroundColor: 'green',
                        padding: '15px',
                    }}
                >
                    {props.text}
                </p>
                <p>{props.text2}</p>
                <p>{props.year}</p>
            </div>
        </>
    )
}
