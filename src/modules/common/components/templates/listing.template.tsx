import { Flex, Heading } from "@chakra-ui/react";

type ListingTemplateProps = {
    listHeader: string;
    list: React.ReactElement;
    endOfList: React.ReactElement;
}

const ListingTemplate = ({
    listHeader,
    list,
    endOfList
}: ListingTemplateProps) => {
    return (
        <Flex direction="column" align="center" justify="center">
            <Heading>{listHeader}</Heading>
            <Flex flex={1}>{list}</Flex>
            <Flex flex={0.5}>{endOfList}</Flex>
        </Flex>
    )
}

export default ListingTemplate