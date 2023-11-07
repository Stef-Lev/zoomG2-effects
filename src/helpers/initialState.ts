export const initialPatchState = {
  name: "",
  inPedal: false,
  pedalCode: "",
  effects: {
    compressor: {
      isActive: false,
      settings: {
        sense: 0,
        attack: "FS",
        level: 0
      }
    },
    wah_efx: {
      isActive: false,
      settings: {
        code: "SL",
        position_depth: "AF",
        rate_freq: 0,
        level_mix: 0
      }
    },
    znr: {
      isActive: false,
      settings: {
        code: "NR",
        threshold: 10
      }
    },
    drive: {
      isActive: false,
      settings: {
        code: "PU",
        gain: 0,
        tone: 0,
        level: 0
      }
    },
    eq: {
      isActive: false,
      settings: {
        bass: 0,
        middle: 0,
        treble: 0
      }
    },
    extra_eq: {
      isActive: false,
      settings: {
        code: "ET",
        lo_mid: 0,
        presence: 0,
        harmonics: 0
      }
    },
    mod_sfx: {
      isActive: false,
      settings: {
        code: "DF",
        depth: 0,
        rate: 0,
        reso: 0
      }
    },
    delay: {
      isActive: false,
      settings: {
        code: "DL",
        time: 0,
        feedback: 0,
        mix: 0
      }
    },
    reverb: {
      isActive: false,
      settings: {
        code: "ND",
        decay: 0,
        tone: 0,
        mix: 0
      }
    }
  }
};
