import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import { Title } from './Title'

function App() {
    return (
        <div>
            <Title text="React.js" />
            <Title text="TypeScript" />
            <Content
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nihil repellat eos nisi nam atque aliquid aut soluta deserunt numquam molestias non doloremque "
                text2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nihil repellat eos nisi nam atque aliquid aut soluta deserunt numquam molestias non doloremque"
                year={1994}
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
