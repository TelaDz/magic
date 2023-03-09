import React, { useState } from 'react'
import ImgBox from './ImgBox'

function index() {
	const [src, setSrc] = useState()
	const onChange = (e) => {
		//获取文件对象
		var file = e.target.files[0]
		//创建reader对象
		var reader = new FileReader()
		//读取完成后触发
		reader.onload = function (ev) {
			//获取图片的url
			var _img_src = ev.target.result
			console.log(_img_src)
			setSrc(_img_src)
		}
		//获取到数据的url 图片将转成 base64 格式
		reader.readAsDataURL(file)
	}

	// return (
	// 	<div className='container'>
	// 		<div className='img-prev-container'></div>
	// 		<input type='file' onChange={onChange} id='fileSelecter' />
	// 		<img src={src} />
	// 	</div>
	// )
	return <ImgBox />
}

export default index
