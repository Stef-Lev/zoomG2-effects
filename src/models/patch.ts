import { Schema, model, models } from "mongoose";
const pedalCodeRegex = /^(0[1-9]|1[0-9]|a[1-9]|B[1-9]|c[1-9]|D[1-9])$/i;

const PatchSchema = new Schema({
  id: String,
  name: String,
  inPedal: Boolean,
  pedalCode: {
    type: String,
    validate: {
      validator: (value: string) => pedalCodeRegex.test(value),
      message: "Invalid pedalCode format"
    }
  },
  effects: {
    effects: {
      compressor: {
        isActive: Boolean,
        settings: {
          sense: Number,
          attack: String,
          level: Number
        }
      },
      wah_efx: {
        isActive: Boolean,
        settings: {
          code: String,
          position_depth: String,
          rate_freq: Number,
          level_mix: Number
        }
      },
      znr: {
        isActive: Boolean,
        settings: {
          code: String,
          threshold: Number
        }
      },
      drive: {
        isActive: Boolean,
        settings: {
          code: String,
          gain: Number,
          tone: Number,
          level: Number
        }
      },
      eq: {
        isActive: Boolean,
        settings: {
          bass: Number,
          middle: Number,
          treble: Number
        }
      },
      extra_eq: {
        isActive: Boolean,
        settings: {
          code: String,
          lo_mid: Number,
          presence: Number,
          harmonics: Number,
          mic_type: String,
          mic_pos: Number
        }
      },
      mod_sfx: {
        isActive: Boolean,
        settings: {
          code: String,
          depth: Number,
          rate: Number,
          reso: Number
        }
      },
      delay: {
        isActive: Boolean,
        settings: {
          code: String,
          time: Number,
          feedback: Number,
          mix: Number
        }
      },
      reverb: {
        isActive: Boolean,
        settings: {
          code: String,
          decay: Number,
          tone: Number,
          mix: Number
        }
      }
    }
  }
});

const Patch = models.Patch || model("Patch", PatchSchema);
export default Patch;
