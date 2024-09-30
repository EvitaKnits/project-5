import { MasonryWall } from "../../components/Piece/Piece";
import Stack from 'react-bootstrap/Stack';
import SearchBar from '../../components/SearchBar/SearchBar';
import ArtTypeDropdown from '../../components/ArtTypeDropdown/ArtTypeDropdown';
import SortByDropdown from '../../components/SortByDropdown/SortByDropdown';
import usePiecesList from '../../hooks/usePiecesList';
import { Fade } from "react-bootstrap";

const Explore = () => {
    const {
        pieces,
        loading,
        setParams,
        params,
        ...rest
    } = usePiecesList()

    return (
        <div className="p-3">
            <h5>Search by piece or artist name, or leave blank and explore with filters</h5>
            <Fade in={!loading}>
                <Stack direction="horizontal" gap={4} className="flex-wrap p-3 justify-content-center">
                    <div className="flex-fill">
                        <SearchBar params={params} setParams={setParams} />
                    </div>
                    <Stack direction="horizontal" gap={4} className="flex-no-wrap">
                        <div>
                            <ArtTypeDropdown params={params} setParams={setParams} />
                        </div>
                        <div className="vr" />
                        <div>
                            <SortByDropdown params={params} setParams={setParams} />
                        </div>
                    </Stack>
                </Stack>
            </Fade>
            {!loading && pieces && (
                <MasonryWall pieces={pieces}  {...rest} />
            )}
        </div>
    );
};

export default Explore;