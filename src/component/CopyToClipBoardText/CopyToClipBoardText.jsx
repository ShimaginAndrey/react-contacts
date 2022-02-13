import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const STATUS_COPY = {
    COPY: 'copy',
    COPIED: 'copied'
};

const TITLE_BY_STATYS = {
    [STATUS_COPY.COPY]: 'Copy',
    [STATUS_COPY.COPIED]: 'Copied',
};

export const CopyToClipBoardText = (props) => {
    const {text} = props;
    const [stateStatusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

    const onClickCopy = (text) => {
        navigator.clipboard.writeText(text);
        setStatusCopy(STATUS_COPY.COPIED);
    }

    return (
        <ClickAwayListener onClickAway={() => setStatusCopy(STATUS_COPY.COPY)}>
            <Tooltip title={TITLE_BY_STATYS[stateStatusCopy]} placement='top' arrow>
                <Button className='button-number' onClick={() => onClickCopy(text)}>
                    <ContentCopyIcon fontSize='small' className='icon icon-copy'/>
                    {text}
                </Button>
            </Tooltip>
        </ClickAwayListener>
    )
};

CopyToClipBoardText.propTypes = {
    text: PropTypes.string.isRequired
};