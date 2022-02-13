import React, {useState, useCallback} from "react";
import '../../css/styles.scss';

import {useContacts} from '../../custom-hook/useContacts';
import {useDataViewMode} from '../../custom-hook/useDataViewMode';

import {ContactsTable} from './ContactsTable/ContactsTable';
import {LoaderContactsTable} from './LoaderContactsTable/LoaderContactsTable';
import {ErrorLoadContacts} from './ErrorLoadContacts/ErrorLoadContacts';
import {ToggleDataViewMode} from './ToggleDataViewModel/ToggleDataViewMode';
import {ContactsFilters} from './ContactsFilter/ContactsFilter';
import {filterByFullName, filterByGender, filterByNationality} from './ContactsFilter/func-filter/funcFilter';

import {DATA_VIEW_MODES} from './constants';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const FilterDefaultValue = {
  fullname: '',
  gender: 'all',
  nationality: 'all'
}

export const Contacts = () => {
  const contacts = useContacts();
  const [stateDataViewMode, setDataViewMode] = useDataViewMode();
  const [stateFilters, setFilters] = useState(FilterDefaultValue);

  const updateFilters = useCallback((name, value) => {
    setFilters(prevStateFilters => ({
      ...prevStateFilters,
      [name]: value,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(FilterDefaultValue);
  }, []);

  const filteredContacts = contacts.data
  .filter((contact) => filterByFullName(contact.name, stateFilters.fullname))
  .filter((concat) => filterByGender(concat.gender, stateFilters.gender))
  .filter((concat) => filterByNationality(concat.nat, stateFilters.nationality));
  
  return (
      <Container className="main-container">
          <Grid container>
              <Grid item xs={12} className="header-grid">
                <Box display='flex' justifyContent='space-between'>
                <Typography variant="h4" component="h1">Contacts</Typography>
                <ToggleDataViewMode stateDataViewMode={stateDataViewMode} setDataViewMode={setDataViewMode}/>
                </Box>
              </Grid>
              <Grid item xs={12} className="filters-container">
                <ContactsFilters 
                stateFilters={stateFilters} 
                updateFilters={updateFilters}
                clearFilters={clearFilters}/>
              </Grid>
              <Grid item xs={12}>
                { (contacts.isLoading && <LoaderContactsTable contacts={contacts}/>) 
                  || (contacts.isError && <ErrorLoadContacts contacts={contacts}/>)
                  || (stateDataViewMode === DATA_VIEW_MODES.TABLE ? <ContactsTable data={filteredContacts}/> : 'Grid')
                }              
              </Grid>
          </Grid>
      </Container>
  )
};