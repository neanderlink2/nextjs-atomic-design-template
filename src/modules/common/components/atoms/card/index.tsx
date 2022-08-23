import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

const Card = ({
    ...rest
}: FlexProps) => {
    const bgColor = useColorModeValue("gray.900", "gray.300");
    
    return (
        <Flex borderRadius="xl" bg={bgColor} boxShadow="md" {...rest} />
    )
}

export default Card