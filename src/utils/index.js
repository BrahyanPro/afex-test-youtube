function parseISO8601Duration(duration) {
  let regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let matches = duration.match(regex);

  let hours = parseInt(matches[1]) || 0;
  let minutes = parseInt(matches[2]) || 0;
  let seconds = parseInt(matches[3]) || 0;

  return formatDuration(hours * 3600 + minutes * 60 + seconds);
}

function formatDuration(duration) {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  let seconds = Math.floor(duration % 60);

  let hoursStr = hours > 0 ? hours + ":" : "";
  let minutesStr = (hours > 0 && minutes < 10 ? "0" : "") + minutes + ":";
  let secondsStr = seconds < 10 ? "0" + seconds : seconds;

  return hoursStr + minutesStr + secondsStr;
}
export { parseISO8601Duration };