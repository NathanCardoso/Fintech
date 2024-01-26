import { useData } from '../context/dataContext'
import DateInput from './DateInput'

const DateRange = () => {
	const { start, end, setStart, setEnd } = useData()

	return (
		<form className='box flex' onSubmit={(event) => event.preventDefault()}>
			<DateInput
				label='inicio'
				value={start}
				onChange={({ target }) => setStart(target.value)}
			/>
			<DateInput
				label='final'
				value={end}
				onChange={({ target }) => setEnd(target.value)}
			/>
		</form>
	)
}

export default DateRange
