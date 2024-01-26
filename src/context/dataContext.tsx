import React from 'react'
import useFetch from '../hooks/useFetch'
import getDate from '../helpers/getDate'

type IDataContext = {
	data: ISale[] | null
	loading: boolean
	error: string | null
	start: string
	end: string
	setStart: React.Dispatch<React.SetStateAction<string>>
	setEnd: React.Dispatch<React.SetStateAction<string>>
}

export type ISale = {
	id: string
	nome: string,
	preco: number
	status: 'pago' | 'processando' | 'falha'
	pagamento: 'boleto' | 'cartao' | 'pix'
	parcelas: number
	data: string
}

const DataContext = React.createContext<IDataContext | null>(null)

export const useData = () => {
	const context = React.useContext(DataContext)
	if(!context) throw new Error('useData precisa estar em DataContextProvider')
	return context
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
	const [start, setStart] = React.useState(getDate(30))
	const [end, setEnd] = React.useState(getDate(0))

	const { data, loading, error } = useFetch<ISale[]>(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)

	return (
		<DataContext.Provider value={{ data, loading, error, start, setStart, end, setEnd }}>
			{ children }
		</DataContext.Provider>
	)
}