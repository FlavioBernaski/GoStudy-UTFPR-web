import { Box, Text, Grid, GridItem, Flex, Center, Button, Spacer } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import {useRouter} from "next/router";
export default function Retornar({titulo}) {
    const router = useRouter();
    return(
        <Flex borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={6} bgColor={'#FFFFFF'}
        maxWidth={'1150px'}  width={"100%"} height={"60px"} alignItems={'center'} >
            <IconButton 
                onClick={()=>router.push('/admin/usuarios')}
                marginRight={'10px'}
                colorScheme='gray'
                bgColor={'whiteAlpha.100'}
                fontSize='20px'
                size='lg'
                icon={<ArrowBackIcon/>}
            /> 
            <Text fontWeight={'medium'} fontSize='26px' marginTop={'-5px'}>
                Cadastro de {titulo}
            </Text>
            
          </Flex>
    )
};