import { Button, Spinner } from "@chakra-ui/react"
import AnimeCard from "@modules/anime/components/organisms/anime-card"
import List from "@modules/common/components/molecules/list"
import ListingTemplate from "@modules/common/components/templates/listing.template"
import axios from "axios"
import useSWRInfinite from "swr/infinite"

type Response<T> = {
    data: T[];
    pagination: {
        has_next_page: boolean;
    }
}

type Anime = {
    title: string;
    episodes: number;
    synopsis: string;
    season: string;
    year: number;
    images: {
        jpg: {
            image_url: string;
        }
    }
}

const ListingPage = () => {
    const { data, isValidating, setSize, size } = useSWRInfinite<Response<Anime>>(
        (index) => `https://api.jikan.moe/v4/anime?page=${index + 1}&limit=50`,
        async (url) => {
            const response = await axios.get<Response<Anime>>(url);
            return response.data;
        });

    return (
        <ListingTemplate
            listHeader="Animes"
            list={(
                <>
                    {isValidating && <Spinner />}
                    {data && (
                        <List
                            data={data.flatMap(x => x.data)}
                            renderItem={(item) => (
                                <AnimeCard 
                                    title={item.title}
                                    image={item.images.jpg.image_url}
                                    synopsis={item.synopsis}
                                />
                            )}
                        />
                    )}
                </>
            )}
            endOfList={(
                <Button
                    isLoading={isValidating}
                    onClick={() => setSize(size + 1)}
                >
                    Load more
                </Button>
            )}
        />
    )
}

export default ListingPage