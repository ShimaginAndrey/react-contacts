export const filterByFullName = (nameContact = {}, fullname) => {
  const fullNameContacts = Object.values(nameContact).join(' ');
  return fullNameContacts.toLowerCase().includes(fullname.toLowerCase());
};
  
export const filterByGender = (gender, filterGender) => {
  if(filterGender === 'all') return true;
  return gender === filterGender;
};

export const filterByNationality = (national, filterNational) => {
  if(filterNational === 'all') return true;
  return national === filterNational;
};