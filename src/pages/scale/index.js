import React, { Component } from 'react'
import './index.less'

export default class Scale extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    state = {
        showMark: false,
        maxImg: 'http://www.wannengwatch.com/wn_source/duopinPage/images/productImg/new/mwatch009E3BTF988NF.jpg',
        top: 0,
        left: 0,
        stop: 0,
        sleft: 0,
    }
    mouseEnter = () => { this.setState({ showMark: true }) }
    mouseLeave = () => { this.setState({ showMark: false }) }
    mouseMove = (e) => {
        // var sl = document.documentElement.scrollLeft || document.body.scrollLeft;
        // var st = document.documentElement.scrollTop || document.body.scrollTop;
        let left = e.target.getBoundingClientRect().left
        let top = e.target.getBoundingClientRect().top
        let sw = this.myRef.current.offsetWidth
        let sh = this.myRef.current.offsetHeight
        let x = e.pageX - left - (sw / 2);
        let y = e.pageY - top - (sh / 2);
        let maxTop = e.target.offsetHeight - sh
        let maxLeft = e.target.offsetWidth - sw
        if (x < 0) { x = 0 }
        if (y < 0) { y = 0 }
        if (x > maxLeft) { x = maxLeft }
        if (y > maxTop) { y = maxTop }
        this.setState({ top: y, left: x })

        //拖拽层移动的比例
        var sbit = x / maxLeft;
        var ybit = y / maxTop;

        //拖过图片层减去父元素maxImgbox的宽度，因为要把图片限制在可视区域中
        //拖过图片层减去父元素maxImgbox的宽度，因为要把图片限制在可视区域中
        // var sleft = (maxImgDom.offsetWidth-maxImgDom.parentElement.offsetWidth) * sbit*-1;
        // var stop= (maxImgDom.offsetHeight-maxImgDom.parentElement.offsetHeight) *ybit*-1;
        //赋予图片位置
       
        // this.setState({ stop: y, sleft: x })

        console.log(sbit,ybit);
        
    }

    render() {
        const { showMark, maxImg, top, left } = this.state
        return (
            <div className="imgwrap">
                <div className="imgbox"
                    onMouseEnter={this.mouseEnter}
                    onMouseLeave={this.mouseLeave}
                    onMouseMove={this.mouseMove}
                >
                    <img src="http://www.wannengwatch.com/wn_source/duopinPage/images/productImg/new/mwatch009E3BTF988NF.jpg" alt="img" width="180" height="180" />
                    {showMark ? <span ref={this.myRef} style={{
                        top: top + 'px', left: left + 'px'
                    }}></span> : ''}
                    <div className="mark"></div>
                </div>
                <div className="cont">
                    <h4><i>腕能</i>不怕脏的纳米T恤</h4>
                    <p className="tdescribe">原价1280元，活动价128元，买1件再送1件，全国包邮，货到付款。支持7天无理由退换货！数量有限，先购先得！</p>
                    <div className="priceInfo">
                        <p>
                            <span className="price">￥<i>128.0</i>元</span>
                            <span className="freeFay">免邮到付</span>
                        </p>
                        <p className="peopleNum">
                            <span>380127</span>人已买
                                <a target="_blank" href="./tixu.htm" className="lookNow">立即查看</a>
                        </p>
                    </div>
                </div>
                {/* 大图层 */}
                {
                    showMark ? <div className="maxImgbox">
                        <img className="maxImg" src={maxImg} 
                        // style={ { top: stop + 'px', left: sleft + 'px' } } 
                        alt='img2' />
                    </div> : ''
                }

            </div >
        )
    }
}
