import { useParams } from "react-router-dom"
import { ISale } from "../context/dataContext"
import Loading from "../components/Loading"
import useFetch from "../hooks/useFetch"

type SaleOffData = Omit<ISale, 'data'>

const Sale = () => {
	const { id } = useParams()
	const { data, loading } = useFetch<SaleOffData>(`https://data.origamid.dev/vendas/${id}`)
	
	if (loading === true) return <Loading />
	if (data === null) return null
	return (
		<div>
			<div className='box mb'>ID: {data.id}</div>
			<div className='box mb'>Nome: {data.nome}</div>
			<div className='box mb'>
				Preco:{' '}
				{data.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
			</div>
			<div className='box mb'>Status: {data.status}</div>
			<div className='box mb'>Pagamento: {data.pagamento}</div>
		</div>
	)
}

export default Sale
