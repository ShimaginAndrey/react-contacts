export const formatDateBirthDay = (dateBirthday) => {
    const arrayDate = [...dateBirthday];
    arrayDate.splice(arrayDate.indexOf('T'));
    return arrayDate.join('').replaceAll('-', '/');
};