import React from 'react';
import './RedomImage.css';
//image.zhangxinxu.com/image/study/s/s256/mm7.jpg,//image.zhangxinxu.com/image/study/s/s256/mm8.jpg,//image.zhangxinxu.com/image/study/s/s256/mm9.jpg,//image.zhangxinxu.com/image/study/s/s256/mm11.jpg,//image.zhangxinxu.com/image/study/s/s256/mm12.jpg,//image.zhangxinxu.com/image/study/s/s256/mm14.jpg
// 'https://image.zhangxinxu.com/image/study/s/s256/mm4.jpg','https://image.zhangxinxu.com/image/study/s/s256/mm5.jpg','https://image.zhangxinxu.com/image/study/s/s256/mm6.jpg',

class RedomImage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      imgUrl: [
        require('./mm10.jpg'),
        require('./mm1.jpg'),
        require('./mm3.jpg'),
        require('./mm2.jpg'),
      ],
      winHeight: '',
      winWidth: '',
    };

  }

  componentDidMount () {
    this.x= window.setTimeout(()=>{this.setState ({
      imgDom:this.state.imgUrl.map ((item, index) => ( // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={index}
          href="javascript:;"
          className="pic"
          style={   this.imgRotate ()}
        >
          <img alt="" width={this.imgWidth ()} src={item} />
        </a>
      ))
    })},0)
    

    
  }

  imgWidth () {
    return 100 + 106 * Math.random () + 'px';
  }

  imgRotate () {
    let num, leftRan, topRan;
    if (Math.random () * 10 > 5) {
      num = 1 * (45 * Math.random ());
    } else {
      num = -1 * (45 * Math.random ());
    }
    
    leftRan = this.props.AppheaderWidth * Math.random ();
    topRan = this.props.AppheaderHeight * Math.random ();
    console.log(leftRan)
    return {transform: `rotate(${num}deg)`,color:'blue', position: 'absolute', top:`${topRan}px`, left:`${leftRan}px`};
  }

  render () {
    return (<div className="imgContent">
      {this.state.imgDom}
    </div>)
  }
}

export default RedomImage;
