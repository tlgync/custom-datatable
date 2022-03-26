import PropTypes from 'prop-types';

// icons
import { LeftIcon, RightIcon } from "../../assets/icons";

// components
import { IconButton } from "../IconButton";



export function Pagination<T>({ data, pagination, setPagination, setPage, page }: IPagination<T>) {
    const dataLength = data.length;
    const pageCount = Math.floor(dataLength / pagination);
    return (
        <div className='pagination'>
            <span>Rows per page:</span>
            <select value={pagination} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPagination(+e.target.value)}>
                {[...Array(10)].map((item, i) => (
                    <option key={i} value={(i + 1) * 10}>{(i + 1) * 10}</option>
                ))}
            </select>
            <IconButton disabled={page === 1} onClick={() => setPage(prev => prev - 1)} icon={<LeftIcon />} />
            <span className="paginationText">{page} / {pageCount}</span>
            <IconButton disabled={page >= pageCount} onClick={() => setPage(prev => prev + 1)} icon={<RightIcon />} />

        </div>
    )
}

Pagination.propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.number.isRequired,
    setPagination: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,

};