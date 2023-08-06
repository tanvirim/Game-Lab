import { Heading, Spinner, Text ,Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandableText from '../components/ExpandableText'


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
 <div>

     <Heading> {data.name}</Heading>
     <ExpandableText text={data.description_raw} maxLength= {300} />
 </div>
      
  
    
  )
}

export default GameDetailsPage
