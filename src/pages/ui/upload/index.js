import React, { Component } from 'react'

import CutImage from './components/cutImage'

export default class Upload extends Component {
    state = {
        stage: 0,
        pic: 'http://contentcms-bj.cdn.bcebos.com/cmspic/af8d38c8c8a235b5ac23772a356428b5.jpeg?x-bce-process=image/crop,x_84,y_0,w_870,h_584'
    }

    render() {
        let {stage,pic} = this.state
        return (
            <div>
                <div>{stage}</div>
                <img style={{width: '200px'}} src={pic} alt="暂无图片" />
                <CutImage />
            </div>
        )
    }
}
