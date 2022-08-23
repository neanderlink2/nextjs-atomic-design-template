import { List as ChakraList, ListItem } from '@chakra-ui/react';
import React from 'react';

type ListProps<T> = {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactElement;
}

const List = <T extends object>({
    data,
    renderItem
}: ListProps<T>) => {
    return (
        <ChakraList>
            {data.map((item, index) => (
                <ListItem>{renderItem(item, index)}</ListItem>
            ))}
        </ChakraList>
    )
}

export default List