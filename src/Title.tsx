interface ITitle {
    text: string
}

export const Title = (props: ITitle) => {
    return <h1>Hello {props.text}</h1>
}
