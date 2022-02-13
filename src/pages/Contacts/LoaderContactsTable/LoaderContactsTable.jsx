import CircularProgress from '@mui/material/CircularProgress';

export const LoaderContactsTable = (props) => {
    const {contacts} = props;

    return (
        <>
            { contacts.isLoading && <CircularProgress data-testid='contacts-loader'>...loading</CircularProgress> }
        </>
    )
};