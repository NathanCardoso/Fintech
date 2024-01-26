import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ISale } from '../context/dataContext'

type ISaleDay = {
	data: string
	pago: number
	processando: number
	falha: number
}

function transformData(data: ISale[]): ISaleDay[] {
	const days = data.reduce((acc: { [key: string]: ISaleDay }, item) => {
		const day = item.data.split(' ')[0]
		if(!acc[day]) {
			acc[day] = {
				data: day,
				pago: 0,
				processando: 0,
				falha: 0
			}
		}
		acc[day][item.status] += item.preco
		return acc
	}, {})

	return Object.values(days).map((day) => ({
		...day,
		data: day.data.substring(5)
	}))
}

const GraphSales = ({ data }: { data: ISale[] }) => {
	const transformedData = transformData(data)

	return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
	)
}

export default GraphSales
