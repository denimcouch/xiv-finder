import { Container, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <nav className='xivNav'>
      <Container mx='auto' py='1rem' maxW='container.lg'>
        <Flex justify='space-between' alignItems='center'>
          <Flex className='xivNav__app-logo'>
            <Link
              as={RouterLink}
              to='/'
              fontWeight='bold'
              className='xivNav__nav-link xivNav__nav-link--logo-text'
            >
              XIV Finder
            </Link>
          </Flex>

          <Flex className='xivNav__nav-links' gap='.75rem'>
            <Link
              as={RouterLink}
              to='/'
              color='purple.600'
              fontWeight='bold'
              className='xivNav__nav-link xivNav__nav-link--home'
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to='/about'
              color='purple.600'
              fontWeight='bold'
              className='xivNav__nav-link xivNav__nav-link--about'
            >
              About
            </Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
