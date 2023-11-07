export const validationValues = {
  pedalCode: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9"
  ],
  compressor: {
    sense: { min: 1, max: 10 },
    attack: ["FS", "SL"],
    level: { min: 1, max: 100 }
  },
  wah_efx: {
    code: ["AW", "AR", "BS", "TR", "PH", "RG", "SL", "PU", "PB"],
    AW: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: -10, max: 10 },
      level_mix: { min: 0, max: 10 }
    },
    AR: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: -10, max: 10 },
      level_mix: { min: 0, max: 10 }
    },
    BS: {
      position_depth: { min: 1, max: 5 },
      rate_freq: { min: 0, max: 10 },
      level_mix: { min: 1, max: 100 }
    },
    TR: {
      position_depth: { min: 1, max: 100 },
      rate_freq: { min: 1, max: 50 },
      level_mix: [
        "u0",
        "u1",
        "u2",
        "u3",
        "u4",
        "u5",
        "u6",
        "u7",
        "u8",
        "u9",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "t0",
        "t1",
        "t2",
        "t3",
        "t4",
        "t5",
        "t6",
        "t7",
        "t8",
        "t9"
      ]
    },
    PH: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: 1, max: 50 },
      level_mix: { min: 1, max: 4 }
    },
    RG: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: 1, max: 50 },
      level_mix: { min: 1, max: 100 }
    },
    SL: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: 1, max: 50 },
      level_mix: { min: 0, max: 10 }
    },
    PU: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: 1, max: 50 },
      level_mix: { min: 1, max: 100 }
    },
    PB: {
      position_depth: ["AF", "BF"],
      rate_freq: { min: 1, max: 50 },
      level_mix: { min: 1, max: 100 }
    }
  },
  znr: {
    code: ["NR", "GT", "DG"],
    threshold: { min: 1, max: 16 }
  },
  drive: {
    code: [
      "FC",
      "CA",
      "JC",
      "NC",
      "BL",
      "BC",
      "ND",
      "BG",
      "PU",
      "OD",
      "GU",
      "HB",
      "FF",
      "NT",
      "ED",
      "DF",
      "AC"
    ],
    gain: { min: 1, max: 100 },
    tone: { min: 0, max: 10 },
    level: { min: 1, max: 100 }
  },
  eq: {
    bass: { min: -12, max: 12 },
    middle: { min: -12, max: 12 },
    treble: { min: -12, max: 12 }
  },
  extra_eq: {
    code: ["ET", "CB"],
    ET: {
      lo_mid: { min: -12, max: 12 },
      presence: { min: -12, max: 12 },
      harmonics: { min: -12, max: 12 }
    },
    CB: {
      mic_type: ["Co", "DY"],
      mic_pos: { min: 0, max: 2 }
    }
  },
  mod_sfx: {
    code: [
      "CH",
      "SC",
      "FL",
      "PT",
      "PP",
      "UB",
      "ST",
      "DL",
      "TE",
      "DD",
      "DF",
      "NP",
      "HP"
    ],
    CH: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: 1, max: 100 }
    },
    SC: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: 1, max: 100 }
    },
    FL: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: 1, max: 100 }
    },
    PT: {
      depth: { min: -12, max: 24 },
      rate: { min: 0, max: 10 },
      reso: { min: 1, max: 100 }
    },
    PP: {
      depth: { min: 1, max: 8 },
      rate: ["UP", "DN"],
      reso: { min: 0, max: 10 }
    },
    UB: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: 1, max: 100 }
    },
    ST: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: 0, max: 10 }
    },
    DL: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 100 },
      reso: { min: 1, max: 100 }
    },
    TE: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 100 },
      reso: { min: 1, max: 100 }
    },
    DD: {
      depth: { min: 1, max: 100 },
      rate: { min: 0, max: 10 },
      reso: { min: -10, max: 10 }
    },
    DF: {
      depth: { min: 1, max: 100 },
      rate: { min: 1, max: 50 },
      reso: { min: -10, max: 10 }
    },
    NP: {
      depth: { min: -12, max: 24 },
      rate: { min: 0, max: 10 },
      reso: { min: 1, max: 100 }
    },
    HP: {
      depth: { min: -6, max: 6 },
      rate: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      reso: { min: 1, max: 100 }
    }
  },
  delay: {
    code: ["DL", "PD", "EC"],
    time: { min: 1, max: 100 },
    feedback: { min: 1, max: 100 },
    mix: { min: 1, max: 100 }
  },
  reverb: {
    code: ["HL", "RN", "SP", "ER", "ND"],
    HL: {
      decay: { min: 1, max: 30 },
      tone: { min: 0, max: 10 },
      mix: { min: 1, max: 100 }
    },
    RN: {
      decay: { min: 1, max: 30 },
      tone: { min: 0, max: 10 },
      mix: { min: 1, max: 100 }
    },
    SP: {
      decay: { min: 1, max: 30 },
      tone: { min: 0, max: 10 },
      mix: { min: 1, max: 100 }
    },
    ER: {
      decay: { min: 1, max: 30 },
      tone: { min: -10, max: 10 },
      mix: { min: 1, max: 100 }
    },
    ND: {
      decay: { min: 1, max: 120 },
      tone: { min: 1, max: 8 },
      mix: { min: 1, max: 100 }
    }
  }
};

export default validationValues;
