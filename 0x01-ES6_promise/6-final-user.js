import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise
    .allSettled([user, photo])
    .then((results) => {
      const array = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          array.push({ status: result.status, value: result.value });
        } else {
          array.push({ status: result.status, value: `Error: ${result.reason.message}` });
        }
      });
      return array;
    });
}
