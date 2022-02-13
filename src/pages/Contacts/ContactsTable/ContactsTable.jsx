import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import {formatDateBirthDay} from '../../../helpers/formatDate';

import {CopyToClipBoardText} from '../../../component/CopyToClipBoardText/CopyToClipBoardText';
import {NATIONALITY_HUMAN_NAME} from '../../../constants/nationality';

export const ContactsTable = (props) => {
    const { data } = props;

    return (
        <TableContainer component={Paper}>
            <Table  sx={{ minWidth: 650 }} aria-label="contacts table">
            <TableHead>
                <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Full name</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Nationality</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((contact) => (
                <TableRow
                    key={contact.login.uuid}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>
                    <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />
                    </TableCell>
                    <TableCell>{contact.name.title} {contact.name.first} {contact.name.last}</TableCell>
                    <TableCell>
                        <Typography>{formatDateBirthDay(contact.dob.date)}</Typography>
                        <Typography>{contact.dob.age} years</Typography>
                    </TableCell>
                    <TableCell>
                        <CopyToClipBoardText text={contact.email}/>
                    </TableCell>
                    <TableCell>
                        <CopyToClipBoardText text={contact.phone}/>
                    </TableCell>
                    <TableCell>
                        <Typography>{contact.location.country}</Typography>
                        <Typography>{contact.location.city}, {contact.location.street.name}{" "}{contact.location.street.number}</Typography>
                    </TableCell>
                    <TableCell>{NATIONALITY_HUMAN_NAME[contact.nat]}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
};