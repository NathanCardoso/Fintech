import { ISale } from '../context/dataContext'
import { NavLink } from 'react-router-dom'

const SaleItem = ({ sale }: { sale: ISale }) => {
	return (
		<div className='sale box'>
			<NavLink to={`/sales/${sale.id}`} style={{fontFamily: 'monospace'}}>{sale.id}</NavLink>
			<div>{sale.nome}</div>
			<div>{sale.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
		</div>
	)
}

export default SaleItem
