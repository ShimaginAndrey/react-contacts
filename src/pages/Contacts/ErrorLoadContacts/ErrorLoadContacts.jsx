import CircularProgress from '@mui/material/CircularProgress';

export const ErrorLoadContacts = (props) => {
    const {contacts} = props;

    return (
        <>
            { contacts.isError && <CircularProgress>...error</CircularProgress> }
        </>
    )
};