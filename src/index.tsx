import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitle {
    text: string
}

interface IContent {
    text: string
    text2: string
    year: number
}

const Title = (props: ITitle) => {
    return <h1>Hello {props.text}</h1>
}

const Content = (props: IContent) => {
    return (
        <React.Fragment>
            <div>
                <span>
                    {props.text}
                    {props.text2}
                </span>
                <p>{props.year}</p>
            </div>
        </React.Fragment>
    )
}

function App() {
    return (
        <div>
            <Title text="React.js" />
            <Title text="TypeScript" />
            <Content text="Guten Morgen" text2="Yugen" year={1994} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
