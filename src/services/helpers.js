export function effectsCodes() {
  let arr = [];
  let letters = ["A", "B", "C", "D"];
  for (let i = 0; i <= 30; i++) {
    if (i < 10) {
      arr.push(`0${i}`);
    } else {
      arr.push(`${i}`);
    }
  }
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < 10; j++) {
      arr.push(`${letters[i]}${j}`);
    }
  }
  return arr;
}

export function numRange(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

export function noteRange() {
  return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
}

export function specialRange(type = null) {
  if (type === "pedal") {
    return ["UP", "DN"];
  } else if (type === "mic") {
    return ["CO", "DY"];
  } else {
    let arr = [];
    let letters = ["u", "d", "t"];

    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push(`${letters[i]}${j}`);
      }
    }
    return arr;
  }
}
export const effectState = {
  comp: { status: false, sense: null, attack: null, level: null },
  wahEfx: {
    active: false,
    type: null,
    position: null,
    rate: null,
    level: null,
  },
  znr: { active: false, type: null, threshold: null },
  drive: { active: false, type: null, gain: null, tone: null, level: null },
  eq: { bass: null, middle: null, treble: null },
  extraEq: {
    active: false,
    type: null,
    loMid: false,
    presence: null,
    harmonics: null,
  },
  modSfx: {
    active: false,
    type: null,
    loMid: false,
    presence: null,
    harmonics: null,
  },
  delay: {
    active: false,
    type: null,
    time: false,
    feedback: null,
    mix: null,
  },
  reverb: {
    active: false,
    type: null,
    decay: false,
    tone: null,
    mix: null,
  },
};
