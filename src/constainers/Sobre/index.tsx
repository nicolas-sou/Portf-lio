import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
  }, [])
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo tipo="principal">
        Sou desenvolvedor Front-end apaixonado por criar experiências
        interativas e responsivas para web. Com habilidades em HTML, CSS e
        JavaScript. Estou sempre em busca de novos desafios e tendências,
        atualmente procuro por oportunidades de novos projetos.
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=nicolas-sou&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nicolas-sou&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
