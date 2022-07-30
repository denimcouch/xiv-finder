import { Container, Flex, Heading } from '@chakra-ui/react'
import CharacterSearch from '../components/characters/CharacterSearch'

const Home = () => {
  return (
    <div>
      <Container maxW='container.lg' py='2rem'>
        <Flex
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
          gap='1rem'
        >
          <Heading as='h1' size='lg'>
            Welcome to XIV Finder!
          </Heading>
          {/* Search for Character */}
          <CharacterSearch />
          {/* List search results */}
        </Flex>
      </Container>
    </div>
  )
}

export default Home
