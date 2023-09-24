import { Schema, model, models } from "mongoose";

const PatchSchema = new Schema({
  id: String,
  name: String,
  inPedal: Boolean,
  pedalCode: String,
  compressor: {
    isActive: Boolean,
    sense: { type: Number, min: 1, max: 10 },
    attack: { type: String, enum: ["FS", "SL"] },
    level: { type: Number, min: 1, max: 100 }
  },
  wah_efx: {
    isActive: Boolean,
    settings: {
      type: {
        AW: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: -10, max: 10 },
          level_mix: { type: Number, min: 0, max: 10 }
        },
        AR: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: -10, max: 10 },
          level_mix: { type: Number, min: 0, max: 10 }
        },
        BS: {
          position_depth: { type: Number, min: 1, max: 5 },
          rate_freq: { type: Number, min: 0, max: 10 },
          level_mix: { type: Number, min: 1, max: 100 }
        },
        TR: {
          position_depth: { type: Number, min: 1, max: 100 },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: {
            type: String,
            enum: [
              ...Array.from(Array(10)).map((_, i) => `u${i}`),
              ...Array.from(Array(10)).map((_, i) => `d${i}`),
              ...Array.from(Array(10)).map((_, i) => `t${i}`)
            ]
          }
        },
        PH: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: { type: Number, min: 1, max: 4 }
        },
        RG: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: { type: Number, min: 1, max: 100 }
        },
        SL: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: { type: Number, min: 0, max: 10 }
        },
        PU: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: { type: Number, min: 1, max: 100 }
        },
        PB: {
          position_depth: { type: String, enum: ["AF", "BF"] },
          rate_freq: { type: Number, min: 1, max: 50 },
          level_mix: { type: Number, min: 1, max: 100 }
        }
      },
      oneOf: [
        { "type.AW": { $exists: true } },
        { "type.AR": { $exists: true } },
        { "type.BS": { $exists: true } },
        { "type.TR": { $exists: true } },
        { "type.PH": { $exists: true } },
        { "type.RG": { $exists: true } },
        { "type.SL": { $exists: true } },
        { "type.PU": { $exists: true } },
        { "type.PB": { $exists: true } }
      ]
    }
  },
  znr: {
    isActive: Boolean,
    settings: {
      type: {
        NR: { threshold: { type: Number, min: 1, max: 16 } },
        GT: { threshold: { type: Number, min: 1, max: 16 } },
        DG: { threshold: { type: Number, min: 1, max: 16 } }
      }
    }
  },
  drive: {
    isActive: Boolean,
    setting: {
      type: String,
      enum: [
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
      ]
    },
    gain: { type: Number, min: 1, max: 100 },
    tone: { type: Number, min: 0, max: 10 },
    level: { type: Number, min: 1, max: 100 }
  },
  eq: {
    bass: { type: Number, min: -12, max: 12 },
    middle: { type: Number, min: -12, max: 12 },
    treble: { type: Number, min: -12, max: 12 }
  },
  extra_eq: {
    isActive: Boolean,
    settings: {
      type: {
        ET: {
          lo_mid: { type: Number, min: -12, max: 12 },
          presence: { type: Number, min: -12, max: 12 },
          harmonics: { type: Number, min: -12, max: 12 }
        },
        CB: {
          mic_type: {
            type: String,
            enum: ["Co", "DY"]
          },
          mic_pos: { type: Number, min: 0, max: 2 }
        }
      },
      oneOf: [
        { "type.ET": { $exists: true } },
        { "type.CB": { $exists: true } }
      ]
    }
  },
  mod_sfx: {
    isActive: Boolean,
    settings: {
      type: {
        CH: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: 1, max: 100 }
        },
        SC: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: 1, max: 100 }
        },
        FL: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: 1, max: 100 }
        },
        PT: {
          depth: { type: Number, min: -12, max: 24 },
          rate: { type: Number, min: 0, max: 10 },
          reso: { type: Number, min: 1, max: 100 }
        },
        PP: {
          depth: { type: Number, min: 1, max: 8 },
          rate: { type: String, enum: ["UP", "DN"] },
          reso: { type: Number, min: 0, max: 10 }
        },
        UB: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: 1, max: 100 }
        },
        ST: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: 0, max: 10 }
        },
        DL: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 100 },
          reso: { type: Number, min: 1, max: 100 }
        },
        TE: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 100 },
          reso: { type: Number, min: 1, max: 100 }
        },
        DD: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 0, max: 10 },
          reso: { type: Number, min: -10, max: 10 }
        },
        DF: {
          depth: { type: Number, min: 1, max: 100 },
          rate: { type: Number, min: 1, max: 50 },
          reso: { type: Number, min: -10, max: 10 }
        },
        NP: {
          depth: { type: Number, min: -12, max: 24 },
          rate: { type: Number, min: 0, max: 10 },
          reso: { type: Number, min: 1, max: 100 }
        },
        HP: {
          depth: { type: Number, min: -6, max: 6 },
          rate: {
            type: String,
            enum: [
              "C",
              "C#",
              "D",
              "D#",
              "E",
              "F",
              "F#",
              "G",
              "G#",
              "A",
              "A#",
              "B"
            ]
          },
          reso: { type: Number, min: 1, max: 100 }
        }
      },
      oneOf: [
        { "type.CH": { $exists: true } },
        { "type.SC": { $exists: true } },
        { "type.FL": { $exists: true } },
        { "type.PT": { $exists: true } },
        { "type.PP": { $exists: true } },
        { "type.UB": { $exists: true } },
        { "type.ST": { $exists: true } },
        { "type.DL": { $exists: true } },
        { "type.TE": { $exists: true } },
        { "type.DD": { $exists: true } },
        { "type.DF": { $exists: true } },
        { "type.NP": { $exists: true } },
        { "type.HP": { $exists: true } }
      ]
    }
  },
  delay: {
    isActive: Boolean,
    setting: {
      type: String,
      enum: ["DL", "PD", "EC"]
    },
    time: { type: Number, min: 1, max: 100 },
    feedback: { type: Number, min: 1, max: 100 },
    mix: { type: Number, min: 1, max: 100 }
  },
  reverb: {
    settings: {
      type: {
        HL: {
          decay: { type: Number, min: 1, max: 30 },
          tone: { type: Number, min: 0, max: 10 },
          mix: { type: Number, min: 1, max: 100 }
        },
        RN: {
          decay: { type: Number, min: 1, max: 30 },
          tone: { type: Number, min: 0, max: 10 },
          mix: { type: Number, min: 1, max: 100 }
        },
        SP: {
          decay: { type: Number, min: 1, max: 30 },
          tone: { type: Number, min: 0, max: 10 },
          mix: { type: Number, min: 1, max: 100 }
        },
        ER: {
          decay: { type: Number, min: 1, max: 30 },
          tone: { type: Number, min: -10, max: 10 },
          mix: { type: Number, min: 1, max: 100 }
        },
        ND: {
          decay: { type: Number, min: 1, max: 120 },
          tone: { type: Number, min: 1, max: 8 },
          mix: { type: Number, min: 1, max: 100 }
        }
      },
      oneOf: [
        { "type.HL": { $exists: true } },
        { "type.RN": { $exists: true } },
        { "type.SP": { $exists: true } },
        { "type.ER": { $exists: true } },
        { "type.ND": { $exists: true } }
      ]
    }
  }
});

const Patch = models.Patch || model("Patch", PatchSchema);
export default Patch;
