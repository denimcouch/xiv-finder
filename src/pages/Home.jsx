import { Container, Flex, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Container maxW='container.lg' py='2rem'>
        <Flex
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
        >
          <Heading as='h1' size='lg'>
            Welcome to XIV Finder!
          </Heading>
          {/* Search for Character */}
          {/* List search results */}
        </Flex>
      </Container>
    </div>
  )
}

export default Home
