import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    title: 'Resident Evil 4',
    image: resident,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    id: 1
  },
  {
    title: 'Resident Evil 4',
    image: diablo,
    category: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    id: 2
  },
  {
    title: 'Resident Evil 4',
    image: zelda,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    id: 3
  },
  {
    title: 'Resident Evil 4',
    image: starWars,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    id: 4
  }
]

const emBreve: Game[] = [
  {
    title: 'Diablo IV',
    image: diablo,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Windows',
    infos: ['17/05'],
    id: 5
  },
  {
    title: 'Zelda',
    image: zelda,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    id: 6
  },
  {
    title: 'Star Wars',
    image: starWars,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'PC',
    infos: ['17/05'],
    id: 7
  },
  {
    title: 'Resident Evil 4',
    image: resident,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Windows',
    infos: ['17/05'],
    id: 8
  }
]

const Categories = () => (
  <>
    <ProductsList title="RPG" background="gray" games={promocoes} />
    <ProductsList title="Ação" background="black" games={emBreve} />
    <ProductsList title="Aventura" background="gray" games={promocoes} />
    <ProductsList title="FPS" background="black" games={emBreve} />
  </>
)

export default Categories
