import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
