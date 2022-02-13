import React from "react";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {DATA_VIEW_MODES} from '../constants';
import PropTypes from 'prop-types';

export const ToggleDataViewMode = React.memo((props) => {

    const {stateDataViewMode, setDataViewMode} = props;

    const onChangeViewMode = (_, nextView) => {
        setDataViewMode(nextView);
    };

    return (
        <ToggleButtonGroup
            exclusive
            value={stateDataViewMode}
            onChange={onChangeViewMode}>
            <ToggleButton value={DATA_VIEW_MODES.TABLE} aria-label={DATA_VIEW_MODES.TABLE}>
              <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value={DATA_VIEW_MODES.GRID} aria-label={DATA_VIEW_MODES.GRID}>
              <ViewListIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
});

ToggleDataViewMode.propTypes = {
    stateDataViewMode: PropTypes.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID]).isRequired,
    setDataViewMode: PropTypes.func.isRequired
};