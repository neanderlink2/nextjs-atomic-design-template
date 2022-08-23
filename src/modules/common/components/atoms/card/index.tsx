import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

const Card = ({
    ...rest
}: FlexProps) => {
    const bgColor = useColorModeValue("gray.300", "gray.900");
    
    return (
        <Flex p={3} borderRadius="xl" bg={bgColor} boxShadow="md" {...rest} />
    )
}

export default Card