import React, { Component } from 'react'

export default class Hacker extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        const h = canvas.height = 800
        const w = canvas.width = 800
        const words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?";
        const wordsArr = words.split('');
        const fontSize = 16
        const textColor = '#33ff33';
        const bgColor = 'rgba(0, 0, 0, .1)';
        const columns = w / fontSize
        const dropUnits = [];
        wordsArr.forEach((item, i) => { dropUnits[i] = 1 })

        // context.fillStyle = textColor
        // context.font = `${fontSize}px arial`

        function draw() {
            context.fillStyle = textColor
            context.font = `${fontSize}px arial`
            dropUnits.forEach((item, i) => {
                const text = wordsArr[Math.floor(Math.random() * wordsArr.length)]
                // const text = wordsArr[i]
                const x = i * fontSize
                const y = dropUnits[i] * fontSize
                context.fillText(text, x, y)
                if (y > h && Math.random() > 0.98) {
                    dropUnits[i] = 0
                }
                dropUnits[i] += 1
            })
        }
        (function frame() {
            window.requestAnimationFrame(frame)
            // context.clearRect(0, 0, w, h);
            context.fillStyle = bgColor;
            context.fillRect(0, 0, w, h);
            draw()
        }())
        console.log(665, dropUnits);
    }
    render() {
        return (
            <div>
                <canvas ref='canvas' style={{ background: '#000' }} />
            </div>
        )
    }
}
