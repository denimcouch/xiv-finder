import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Select,
  Button,
  IconButton,
  Heading,
  Box,
} from '@chakra-ui/react'
import { MdArrowForward, MdClose } from 'react-icons/md'
// CharacterSearch is going to connect to the character search XIVAPI endpoint
// It should accept a name value and a server value to generate the query
const CharacterSearch = () => {
  const [charName, setCharName] = useState('')
  const [serverName, setServerName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNameChange = (e) => setCharName(e.target.value)

  const handleServerChange = (e) => setServerName(e.target.value)

  const handleClear = (e) => setCharName('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('submitting!', charName, serverName)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Box my='1.5rem'>
      <Heading as='h3' size='md' mb='.75rem'>
        Search for a character on Lodestone
      </Heading>
      <form
        title='Character Search Form'
        className='characterSearch'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <FormControl mb='.75rem' maxW='350px'>
          <FormLabel>Character name</FormLabel>
          <InputGroup>
            <Input
              variant='outline'
              placeholder='Enter character name'
              value={charName}
              errorBorderColor='red.500'
              isRequired
              onChange={handleNameChange}
            />
            {charName && (
              <InputRightElement pointerEvents='click'>
                <IconButton
                  title='Clear input'
                  aria-label='Clear input'
                  colorScheme='red'
                  icon={<MdClose />}
                  size='md'
                  variant='ghost'
                  onClick={handleClear}
                />
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
        <FormControl mb='.75rem' maxW='350px'>
          <FormLabel>Choose Server</FormLabel>
          <Select
            variant='outline'
            placeholder='Choose Server'
            value={serverName}
            onChange={handleServerChange}
          >
            {/* TODO: Populate options dynamically */}
            <option value='cactuar'>Cactuar</option>
            <option value='jenova'>Jenova</option>
            <option value='faerie'>Faerie</option>
          </Select>
        </FormControl>
        <Button
          type='submit'
          isLoading={loading}
          loadingText='Searching'
          colorScheme='purple'
          mt='.5rem'
          w='min(100%, 200px)'
          rightIcon={<MdArrowForward />}
        >
          Search
        </Button>
      </form>
    </Box>
  )
}

export default CharacterSearch
