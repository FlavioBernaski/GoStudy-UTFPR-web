import { Box, Text, Grid, GridItem, Flex, Center, Button, flexbox } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { raw } from "next/dist/build/webpack/loaders/next-middleware-wasm-loader"
import { useEffect, useState } from "react"
import useUser from "../../hooks/useUser"
import getAllInstitutes from "../../services/institute/getAllInstitutes"

function handleChange(e) {
    let isChecked = e.target.checked;
    if (isChecked) {
        document.getElementById("RA").disabled = true;
        document.getElementById("RA").style.backgroundColor = "gray";
    } else {
        document.getElementById("RA").disabled = false;
        document.getElementById("RA").style.backgroundColor = "white";
    }

  }


export default function Retornar() {
    const {user} = useUser();
    const [institutes, setInstitutes] = useState([]);
    useEffect(
        ()=>{
            (async ()=>{
                console.log(user)
                if(user?.token){
                    const response = await getAllInstitutes(user.token);
                    console.log(response)
                    if(response.status == 'success'){
                        console.log(response.data[0])
                        setInstitutes(response.data)
                    }
                }
                
            })()
        },[user]
    )

    return(
        <Box borderRadius={'5px'} borderWidth={'1px'}
        borderColor={'#b2b2b2'} p={10} bgColor={'#FFFFFF'}
        maxWidth={'1150px'}  width={"100%"} maxHeight={'350px'} height={'100%'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <Box display={'flex'} justifyContent={'center'} >   
                
                    <Box margin={5} minWidth={220} >
                    <Text>Instituição</Text>
                        <Select placeholder='Selecione' borderColor={"gray.400"}>
                            {institutes.map(
                                (i)=><option value={i?.id}>{i?.name}</option>
                            )}
                        </Select>  
                    </Box>  
                
                
                    <Box margin={5}>
                        <Text>Nome</Text>
                        <Input size='md' type={"text"} borderColor={"gray.400"} />         
                    </Box>  
                
                
                    <Box margin={5}>
                        <Text>Telefone</Text>
                        <Input size='md' type={"tel"} borderColor={"gray.400"} />         
                    </Box>  
               
            </Box> 
            <Box display={'flex'} justifyContent={'center'} >   
                    <Box margin={5}>
                        <Text>E-mail</Text>
                        <Input size='md' type={"email"} borderColor={"gray.400"}  />         
                    </Box>  
                
                
                    <Box margin={5}>
                        <Text>Senha</Text>
                        <Input size='md' type={"password"} borderColor={"gray.400"}  />         
                    </Box>   
                    <Box margin={5}>
                        <Text>RA</Text>
                        <Input size='md' name='RA' id="RA" borderColor={"gray.400"}  />         
                    </Box>  
            </Box> 
            <Box display={'flex'} justifyContent={'center'} marginTop={10}>   
                <Checkbox size='lg' name="check" onChange={e => handleChange(e)}>Usuário administrador</Checkbox>           
            </Box> 
        </Box>
    )
}