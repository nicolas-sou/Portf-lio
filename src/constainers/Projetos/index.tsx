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
      titulo: 'Efood',
      descricao: 'Landing page de restaurante com as Api e react.',
      link: 'https://github.com/nicolas-sou/Efood'
    },
    {
      titulo: 'Lista de tarefas',
      descricao: 'Uma landing page lista de tarefas com Vue.',
      link: 'https://github.com/nicolas-sou/Lista_Tarefas_VueJS'
    },
    {
      titulo: 'Landing page aniversário',
      descricao: 'Convite de aniversaio.',
      link: 'https://github.com/nicolas-sou/landing_page_aniversario'
    },
    {
      titulo: 'Projeto filme',
      descricao: 'Uma landing page sobre o filme usando scss.',
      link: 'https://github.com/nicolas-sou/site_filme/blob/main/index.html'
    },
    {
      titulo: 'Clone do disneyplus',
      descricao: 'Uma landing page do disneyplus com scss.',
      link: 'https://github.com/nicolas-sou/clone_disneyplus'
    },
    {
      titulo: 'Sorteador',
      descricao: 'Uma landing page sorteador com grunt e less.',
      link: '/caminho/do/seu/projeto2'
    },
    {
      titulo: 'Projeto restaurante',
      descricao: 'Uma landing page de restaurante usando bootstrap.',
      link: 'https://github.com/nicolas-sou/Site-restaurante'
    },
    {
      titulo: 'Site games shop',
      descricao: 'Uma landing page simples.',
      link: 'https://github.com/nicolas-sou/site_gamesshop'
    },
    {
      titulo: 'Projeto Ebac motors',
      descricao:
        'Uma landing page sobre venda de carros usando plugins jquery.',
      link: 'https://github.com/nicolas-sou/exerc-cio_plugins_jquery'
    },
    {
      titulo: 'Projeto clínica',
      descricao:
        'Uma landing page de uma clinica de reabilitação usando bootstrap.',
      link: 'https://github.com/nicolas-sou/Site_clinica-2'
    }
  ]
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {projetosData.map((projeto, index) => (
          <li
            key={index}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
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
