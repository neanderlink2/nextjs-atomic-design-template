import { Avatar, Box, Text } from '@chakra-ui/react';
import Card from '@modules/common/components/atoms/card';
import React from 'react';

type AnimeCardProps = {
    image: string;
    title: string;
    synopsis: string;
}

const AnimeCard = ({
    image,
    synopsis,
    title
}: AnimeCardProps) => {
    return (
        <Card m={4}>
            <Avatar
                src={image}
                borderRadius="full"
            />
            <Box>
                <Text fontWeight="bold">{title}</Text>
                <Text fontSize="small">{synopsis}</Text>
            </Box>
        </Card>
    )
}

export default React.memo(AnimeCard);