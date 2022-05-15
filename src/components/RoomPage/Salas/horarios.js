import { Box, Text, Grid, GridItem, Flex, Center, Button } from "@chakra-ui/react"
import { BsCheckCircle, BsXCircle} from "react-icons/bs";
import { MdCheckCircleOutline } from "react-icons/md";





const Horarios = [
    {
      horario: "07:30",
      isReservado: true
     
    },
    {
      horario: "08:20",
      isReservado: false
     
    },
    {
      horario: "09:10",
      isReservado: false
     
    },
    {
      horario: "10:00",
      isReservado: false
     
    },
    {
      horario: "11:10",
      isReservado: true
     
    },
    {
      horario: "12:00",
      isReservado: false
     
    },
    {
      horario: "13:00",
      isReservado: false
     
    },
    {
      horario: "13:50",
      isReservado: false
     
    },
    {
      horario: "14:40",
      isReservado: false
     
    },
    {
      horario: "15:30",
      isReservado: false
     
    },
    {
      horario: "16:20",
      isReservado: false
     
    },
    {
      horario: "17:30",
      isReservado: false
     
    },
    {
      horario: "18:20",
      isReservado: false
     
    },
    {
      horario: "19:10",
      isReservado: false
     
    },
    {
      horario: "20:00",
      isReservado: false
     
    },
    
  ]
  function reservado(horario) {

    return(
        <Button  borderRadius={'5px'} 
          p={4} bgColor={'#FFEDED'}
         maxWidth={'200px'} width={'130px'} height={'50px'} >
        <Flex>
        <BsXCircle color="red" />
        <Text marginLeft={2} marginTop={-0.5} fontSize='16px'>
            {horario.horario}
        </Text>
        </Flex>
         
       </Button>
    )
  }

  function livre(horario) {

    return(
      <Button  borderRadius={'5px'} 
       p={4} bgColor={'#F0FFF5'}
      maxWidth={'130px'} width={'100%'} height={'50px'} css={{'&:focus':{boxShadow: 'none'}, }} >
      <Flex>
        <MdCheckCircleOutline  color="green" />
        <Text marginLeft={2} marginTop={-0.5} fontSize='16px'>
            {horario.horario}
        </Text>
        </Flex>
    </Button>
        
    )
}

  export default function horarios() {
    return(
        <Box borderRadius={'5px'} 
            p={6} bgColor={'#FFFFFF'}
           maxWidth={'1200px'} width={"100%"}>
            <Grid templateColumns='repeat(6, 1fr)' rowGap={10} columnGap={3}>
              {Horarios.map((horario, index) => (
                <GridItem>
                    { horario.isReservado?
                        reservado(horario)
                        :
                        livre(horario)
                    }
                    
                </GridItem>
              ))}
            </Grid>
            
          </Box>
    )
}