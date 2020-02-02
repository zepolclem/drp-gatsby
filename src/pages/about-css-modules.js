import React from "react"

import Container from "../components/container"
import styles from "./about-css-modules.module.css"
console.log(styles)

export default () => (
    <div>
        <Container>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
        </Container>
        <Container>
            <iframe
                src='https://mychiptuningfiles.com/fr/iframe/token/bf67jwimxhc7ljyv5vepnwuoxd422v3mdfophhbf'
                style={{
                    border: '1px solid #aaa', width: '100%', minHeight: '1000px'
                }}></iframe>
        </Container>
    </div>
)