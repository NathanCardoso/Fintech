import React from 'react'
import { useData } from '../context/dataContext'
import formatDate from '../helpers/formatDate'

function monthName(n: number) {
	const date = new Date()
	date.setMonth(date.getMonth() + n)
	return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
}

const buttonStyle: React.CSSProperties = {
	padding: 'var(--gap) var(--gap-s)',
	backgroundColor: 'var(--color-3)',
	color: 'var(--color-2)',
	border: 'none',
	borderRadius: 'var(--gap)',
	fontWeight: '600',
	textTransform: 'capitalize'
}

const MonthBtn = ({ n }: { n: number }) => {
	const { setStart, setEnd } = useData()

	function setMonth(n: number) {
		const date = new Date()
		date.setMonth(date.getMonth() + n)

		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

		setStart(formatDate(firstDay))
		setEnd(formatDate(lastDay))
	}

	return <button style={buttonStyle} onClick={() => setMonth(n)}>{monthName(n)}</button>
}

export default MonthBtn
