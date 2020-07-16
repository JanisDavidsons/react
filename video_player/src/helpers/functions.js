const secondsToTime = (secs) => {
  secs = Math.round(secs);
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
    toString: hours + ':' + minutes + ':' + seconds,
  };
  return obj;
};

export default secondsToTime;
