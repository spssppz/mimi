'use client'

import { useEffect, useRef } from 'react'

export default function GlowBackground() {
	const blockRef = useRef<HTMLDivElement>(null)
	const rectsRef = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		const block = blockRef.current
		if (!block) return

		let currentAngle = 0
		let targetAngle = 0

		const VISIBLE_OFFSET = 20
		const SMOOTHING = 0.02

		const onMouseMove = (e: MouseEvent) => {
			const rect = block.getBoundingClientRect()

			const x = e.clientX - (rect.left + rect.width / 2)
			const y = e.clientY - (rect.top + rect.height / 2)

			targetAngle = Math.atan2(y, x)
		}

		const animate = () => {
			let diff = targetAngle - currentAngle
			while (diff > Math.PI) diff -= Math.PI * 2
			while (diff < -Math.PI) diff += Math.PI * 2

			currentAngle += diff * SMOOTHING

			const blockW = block.offsetWidth
			const blockH = block.offsetHeight
			const rectEl = rectsRef.current[0]
			if (!rectEl) return

			const rectW = rectEl.offsetWidth
			const rectH = rectEl.offsetHeight

			const limitX = blockW / 2 - rectW / 2 + VISIBLE_OFFSET
			const limitY = blockH / 2 - rectH / 2 + VISIBLE_OFFSET

			const cos = Math.cos(currentAngle)
			const sin = Math.sin(currentAngle)

			const distX = Math.abs(cos) > 0.001 ? limitX / Math.abs(cos) : Infinity
			const distY = Math.abs(sin) > 0.001 ? limitY / Math.abs(sin) : Infinity
			const dist = Math.min(distX, distY)

			const x = dist * cos
			const y = dist * sin

			rectsRef.current.forEach((el, i) => {
				const invert = i % 2 === 1
				el.style.transform = `
					translate(-50%, -50%)
					translate(${invert ? -x : x}px, ${invert ? -y : y}px)
				`
			})

			requestAnimationFrame(animate)
		}

		block.addEventListener('mousemove', onMouseMove)
		requestAnimationFrame(animate)

		return () => {
			block.removeEventListener('mousemove', onMouseMove)
		}
	}, [])

	return (
		<div ref={blockRef} className="glow-block">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div
					key={i}
					ref={(el) => {
						if (el && !rectsRef.current.includes(el)) {
							rectsRef.current.push(el)
						}
					}}
					className={`rect rect-${i}`}
				>
					<div className="shine shine-core" />
					<div className="shine shine-glow" />
				</div>
			))}
		</div>
	)
}
