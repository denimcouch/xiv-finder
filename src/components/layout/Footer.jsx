import { Container, Flex } from '@chakra-ui/react'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='xivFooter'>
      <Container maxW='container.lg' py='2rem'>
        <Flex justify='center'>
          <p>Copyright &copy; {footerYear} All rights reserved</p>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
