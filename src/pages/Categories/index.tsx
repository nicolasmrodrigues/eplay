import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="black"
        games={fightGames}
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="gray"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
export default Categories
