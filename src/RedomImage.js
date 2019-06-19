import React from 'react';
import './RedomImage.css';
//image.zhangxinxu.com/image/study/s/s256/mm7.jpg,//image.zhangxinxu.com/image/study/s/s256/mm8.jpg,//image.zhangxinxu.com/image/study/s/s256/mm9.jpg,//image.zhangxinxu.com/image/study/s/s256/mm11.jpg,//image.zhangxinxu.com/image/study/s/s256/mm12.jpg,//image.zhangxinxu.com/image/study/s/s256/mm14.jpg
// 'https://image.zhangxinxu.com/image/study/s/s256/mm4.jpg','https://image.zhangxinxu.com/image/study/s/s256/mm5.jpg','https://image.zhangxinxu.com/image/study/s/s256/mm6.jpg',

class RedomImage extends React.Component {
  constructor (prop) {
    super (prop);
    this.state = {
      imgUrl: [
        'https://image.zhangxinxu.com/image/study/s/s256/mm10.jpg',
        'https://image.zhangxinxu.com/image/study/s/s256/mm1.jpg',
        'https://image.zhangxinxu.com/image/study/s/s256/mm2.jpg',
        'https://image.zhangxinxu.com/image/study/s/s256/mm3.jpg',
      ],
      winHeight: '',
      winWidth: '',
    };
  }

  componentDidMount () {
    this.setState ({
      winHeight: document.documentElement.clientHeight,
      winWidth: document.documentElement.clientWidth,
    });
  }

  imgWidth () {
    return 100 + 106 * Math.random () + 'px';
  }

  imgRotate () {
    let num, leftRan, rightRan;
    if (Math.random () * 10 > 5) {
      num = 1 * (45 * Math.random ());
    } else {
      num = -1 * (45 * Math.random ());
    }

    leftRan = this.state.winWidth * Math.random ();

    return {transform: `rotate(${num}deg)`, position: 'absoulte'};
  }

  render () {
    return this.state.imgUrl.map ((item, index) => ( // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        key={index}
        href="javascript:;"
        className="pic"
        style={this.imgRotate ()}
      >
        <img alt="" width={this.imgWidth ()} src={item} />
      </a>
    ));
  }
}

export default RedomImage;
