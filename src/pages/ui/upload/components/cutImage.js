import React, { Component } from 'react'
import './index.less'


export default class Upload extends Component {
    constructor(props) {
        super(props);
        // let winW = document.documentElement.clientWidth,
        //     ratio = window.ratio;
        // let canvasW = winW - .4 * ratio,
        //     canvasH = canvasW,
        //     markW = winW * .3,
        //     markH = markW,
        //     markL = (canvasW - markW) / 2, // 水平居中
        //     markT = (canvasH - markH) / 2
        // this.state = {
        //     canvasW, canvasH, markW, markH, markL, markT,
        //     showMark: true
        let winW = document.documentElement.clientWidth,
            ratio = window.ratio;
        let canvasW = winW - .4 * ratio,
            canvasH = canvasW,
            markW = winW * .1,
            markH = markW,
            markL = (canvasW - markW) / 2, // 水平居中
            markT = (canvasH - markH) / 2
        this.state = {
            canvasW, canvasH, markW, markH, markL, markT,
            showMark: false
        }

    }


    render() {
        let { canvasW, canvasH, markW, markH, markL, markT, showMark } = this.state;
        return (
            <div>
                <div className="cut-image">
                    <canvas
                        ref={x => this._canvasRef = x}
                        width={canvasW} height={canvasH} className="canvas"></canvas>
                    <div className="mark" style={{
                        width: markW + 'px',
                        height: markH + 'px',
                        left: markL + 'px',
                        top: markT + 'px',
                        display: showMark ? 'block' : 'none'
                    }}></div>
                </div>
                <div>
                    <input type="file"
                        ref={x => this._file = x}
                        onChange={this.fileChange} accept="image/*" className="file" hidden />
                    <button onClick={() => { this._file.click() }}>上传 </button>
                </div>
            </div >
        )
    }
    // 选择文件
    fileChange = (file) => {
        console.log('file')
        this.setState({ showMark: true })
        let fileData = this._file.files[0]
        if (!fileData) return;
        let fileReader = new FileReader()
        fileReader.readAsDataURL(fileData)
        fileReader.onload = e => {
            console.log('e', e)
            this.img = new Image()
            this.img.src = e.target.result
            this.img.onload = () => {
                this.ctx = this._canvasRef.getContext('2d')
                this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height)
            }

        }
    }
}
