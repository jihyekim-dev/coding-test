function solution(video_len, pos, op_start, op_end, commands) {
  let now = new Date();
  const [m, s] = pos.split(':');
  const [endMin, endSec] = video_len.split(':');
  const [opStMin, opStSec] = op_start.split(':');
  const [opEnMin, opEnSec] = op_end.split(':');
  now.setMinutes(m);
  now.setSeconds(s);

  for (let i = 0; i < commands.length; i++) {
    const [origH, origM, origS] = [
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    ];
    if (
      new Date(2025, 1, 1, 0, origM, origS) >=
        new Date(2025, 1, 1, 0, opStMin, opStSec) &&
      new Date(2025, 1, 1, 0, origM, origS) <=
        new Date(2025, 1, 1, 0, opEnMin, opEnSec)
    ) {
      now.setMinutes(opEnMin);
      now.setSeconds(opEnSec);
    }

    now.setSeconds(now.getSeconds() + (commands[i] === 'prev' ? -10 : 10));
    let [hour, min, sec] = [now.getHours(), now.getMinutes(), now.getSeconds()];
    if (hour == origH - 1 || (hour == 23 && m > origM)) {
      now.setHours(origH);
      now.setMinutes(0);
      now.setSeconds(0);
    } else if (
      hour == origH + 1 ||
      (!hour && m < origM) ||
      min > endMin ||
      (min == endMin && sec > endSec)
    ) {
      now.setHours(origH);
      now.setMinutes(endMin);
      now.setSeconds(endSec);
    } else if (
      new Date(2025, 1, 1, 0, min, sec) >=
        new Date(2025, 1, 1, 0, opStMin, opStSec) &&
      new Date(2025, 1, 1, 0, min, sec) <=
        new Date(2025, 1, 1, 0, opEnMin, opEnSec)
    ) {
      now.setMinutes(opEnMin);
      now.setSeconds(opEnSec);
    }
  }

  return (
    `${now.getMinutes()}`.padStart(2, '0') +
    ':' +
    `${now.getSeconds()}`.padStart(2, '0')
  );
}
