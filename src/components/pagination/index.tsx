import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
    count: number,
    skip: any,
    take: number,
    page: number
}

function Pagination({count, take, skip, page}: PaginationProps) {
    const [get, setGet] = useState(take);

    const pages = count ? Math.ceil(count / get) : 0;

    useEffect(() => {
        setGet(take);
    }, [take]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        const newSkip = (value - 1) * get;
        skip(newSkip, value); // Truyền giá trị page khi chuyển trang
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <MuiPagination count={pages} page={page} onChange={handleChange} />
        </Stack>
    );
}

export default Pagination;