import React, { useEffect, useState, useRef } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'

const getBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = (error) => reject(error)
	})

export default () => {
	const [src, setSrc] = useState()
	useEffect(() => {
		window.addEventListener(
			'dragover',
			(e) => {
				e.preventDefault()
			},
			false,
		)
		window.addEventListener(
			'drop',
			function (ev) {
				ev.preventDefault()
				var reader = new FileReader()
				reader.onload = function (ev) {
					var _img_src = ev.target.result
					setSrc(_img_src)
				}
				reader.readAsDataURL(ev.dataTransfer.files[0])
			},
			false,
		)
		return () => {
			window.removeEventListener('dragover')
			window.removeEventListener('drop')
		}
	}, [])

	return (
		<>
			<div className='container'>
				<img className='img-box' src={src} />
			</div>
		</>
	)
}
