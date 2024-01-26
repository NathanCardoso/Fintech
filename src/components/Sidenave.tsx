import summary from '../assets/icons/resumo.svg'
import sale from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import settings from '../assets/icons/configuracoes.svg'
import contact from '../assets/icons/contato.svg'
import exit from '../assets/icons/sair.svg'
import FintechSVG from '../assets/FintechSVG'
import { NavLink } from 'react-router-dom'

const Sidenave = () => {

	return (
		<nav className='sidenav box bg-3'>
			<FintechSVG title='Fintech Logo' />
			<ul>
				<li>
					<span>
						<img src={summary} alt="" />
					</span>
					<NavLink to='/' >Resumo</NavLink>
				</li>
				<li>
					<span>
						<img src={sale} alt="" />
					</span>
					<NavLink to='/sales'>Vendas</NavLink>
				</li>
				<li>
					<span>
						<img src={webhooks} alt="" />
					</span>
					<a>WebHooks</a>
				</li>
				<li>
					<span>
						<img src={settings} alt="" />
					</span>
					<a>Configurações</a>
				</li>
				<li>
					<span>
						<img src={contact} alt="" />
					</span>
					<a>Contato</a>
				</li>
				<li>
					<span>
						<img src={exit} alt="" />
					</span>
					<a>Sair</a>
				</li>
			</ul>
		</nav>
	)
}

export default Sidenave
