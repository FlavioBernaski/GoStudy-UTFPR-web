import { Box, Input, Text, Button } from "@chakra-ui/react"
import { useState } from "react";
export default function LoginForm() {
   
    return (
        <Box fontSize='14px'>
            <Box marginBottom={'15px'}>
                <Text>E-mail ou RA: </Text>
                <Input fontSize='16px' />
            </Box>
            <Box marginBottom={'15px'}>
                <Text>Senha:</Text>
                <Input  fontSize='16px' />
            </Box>
            <Box  textAlign={'center'}>
                <Button width="100%" color={'white'} background={"#1E6CBF"} _hover={
                    {
                        background: "#1E6CBF",
                    }
                }>
                    Entrar
                </Button>
            </Box>
        </Box>
    )


}