import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

//describe iTitle interface
interface ITitle {
    text: string
}

const Title = (props: ITitle) => {
    return <h1>Hello {props.text}</h1>
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
