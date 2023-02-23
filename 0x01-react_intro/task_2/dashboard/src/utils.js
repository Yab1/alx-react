function getFullYear() {
  return new Date().getFullYear();
}
function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
export default function getLatestNotification() {
  return { __html: '<strong>Urgent requirement</strong> - complete by EOD' };
}
export { getFullYear, getFooterCopy };
