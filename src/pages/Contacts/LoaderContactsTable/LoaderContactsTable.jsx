import { Fragment } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const LoaderContactsTable = (props) => {
    const {contacts} = props;

    return (
        <Fragment>
            { contacts.isLoading && <CircularProgress data-testid='contacts-loader'>...loading</CircularProgress> }
            { contacts.isError && <CircularProgress>...error</CircularProgress> }
        </Fragment>
    )
};