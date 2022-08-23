import { Box, Center, VStack } from "@chakra-ui/react";
import Card from "@modules/common/components/atoms/card";

type LoginTemplateProps = {
    header: React.ReactElement;
    form: React.ReactElement;
    bottomInformation: React.ReactElement;
}

const LoginTemplate = ({
    header,
    form,
    bottomInformation
}: LoginTemplateProps) => {
    return (
        <Center h="90vh">
            <Card as={VStack} bg="gray.900" borderRadius="xl">
                <Box p={4} mb={2}>
                    {header}
                </Box>
                <Center p={4}>
                    {form}
                </Center>
                <Box p={4} mt={2}>
                    {bottomInformation}
                </Box>
            </Card>
        </Center>
    )
}

export default LoginTemplate