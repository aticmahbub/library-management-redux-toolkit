import {useGetBooksQuery} from '@/redux/api/baseApi';

function Books() {
    const {data, error, isLoading} = useGetBooksQuery(undefined);
    console.log({data, error, isLoading});
    return <div>Books</div>;
}

export default Books;
