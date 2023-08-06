import { Heading, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'

const GameDetailsPage = () => {
  const { slug } = useParams()
  const { data, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error) {
    console.error('Error fetching game data:', error)
    return <Text>Error fetching game data.</Text>
  }

  if (!data) {
    return <Text>No data available for the provided slug.</Text>
  }

  return (
    <>
      <Heading> {data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  )
}

export default GameDetailsPage
