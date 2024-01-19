import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 15px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  border: none;
  padding: 10px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
export const ImgGit = styled.img`
  padding-right: 5px;
`

export const SidebarSobre = styled.div`
  padding-bottom: 4px;
`
export const Link = styled.a`
  text-decoration: none;
  display: flex;
  color: ${(props) => props.theme.corDeFundoBotao};
`
