import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
  }, [])
  const projetosData = [
    {
      titulo: 'Eplay',
      descricao: 'Landing page de games com Api e usando react.',
      link: 'https://github.com/nicolas-sou/Eplay'
    },
    {
      titulo: 'Efood',
      descricao: 'Landing page de restaurante com Api e usando react.',
      link: 'https://github.com/nicolas-sou/Efood'
    },
    {
      titulo: 'Site restaurante',
      descricao: 'Landing page usando bootstrap.',
      link: 'https://github.com/nicolas-sou/Site-restaurante'
    },
    {
      titulo: 'Projeto filme',
      descricao: 'Landing page sobre um filme usando scss.',
      link: 'https://github.com/nicolas-sou/site_filme'
    },
    {
      titulo: 'Clone do disneyplus',
      descricao: 'Landing page do disneyplus com scss.',
      link: 'https://github.com/nicolas-sou/clone_disneyplus'
    },
    {
      titulo: 'Ebac Jobs',
      descricao: 'landing page sobre vagas de trabalho usando react',
      link: 'https://github.com/nicolas-sou/base_exercicio_css_in_js'
    },
    {
      titulo: 'Projeto loja tênis',
      descricao: 'Landing page usando Html e Css.',
      link: 'https://github.com/nicolas-sou/loja_virtual'
    },
    {
      titulo: 'Site games shop',
      descricao: 'Landing page usando Html e Css.',
      link: 'https://github.com/nicolas-sou/site_gamesshop'
    },
    {
      titulo: 'Projeto Ebac motors',
      descricao: 'Landing page sobre venda de carros usando plugins jquery.',
      link: 'https://github.com/nicolas-sou/exerc-cio_plugins_jquery'
    }
  ]
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {projetosData.map((projeto, index) => (
          <li
            key={index}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <Projeto
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              link={projeto.link}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
