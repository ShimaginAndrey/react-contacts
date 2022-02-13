import { useEffect, useState } from "react";
import {DATA_VIEW_MODES} from '../pages/Contacts/constants';

const getInitialDataViewMode = () => {
    return localStorage.getItem('stateDataViewMode') || DATA_VIEW_MODES.TABLE;
};

export const useDataViewMode = () => {
    const [stateDataViewMode, setDataViewMode] = useState(getInitialDataViewMode);
  
    useEffect(() => {
      localStorage.setItem('stateDataViewMode', stateDataViewMode);
    },[stateDataViewMode]);
  
    return [stateDataViewMode, setDataViewMode];
};