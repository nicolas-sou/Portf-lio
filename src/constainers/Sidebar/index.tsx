import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import {
  Descricao,
  BotaoTema,
  SidebarContainer,
  Link,
  SidebarSobre
} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Nicolas Sousa</Titulo>
      <SidebarSobre>
        <Paragrafo tipo="secundario" fontSize={15}>
          <Link href="https://github.com/nicolas-sou">Github</Link>
        </Paragrafo>
      </SidebarSobre>
      <Paragrafo tipo="secundario" fontSize={15}>
        <Link href="https://www.linkedin.com/in/nicollas-dev-frontend/?originalSubdomain=br">
          Linkedin
        </Link>
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
