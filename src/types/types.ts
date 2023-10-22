import mongoose, { Connection } from "mongoose";
const pedalCodeRegex = /^(0[1-9]|1[0-9]|a[1-9]|B[1-9]|c[1-9]|D[1-9])$/i;
export interface CompressorSettings {
  isActive: boolean;
  settings: {
    sense: number;
    attack: "FS" | "SL";
    level: number;
  };
}

export interface WahEfxSettings {
  isActive: boolean;
  settings: {
    AW?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    AR?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    BS?: {
      position_depth: number;
      rate_freq: number;
      level_mix: number;
    };
    TR?: {
      position_depth: number;
      rate_freq: number;
      level_mix: string; // Assuming the enum you provided for this is a string
    };
    PH?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    RG?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    SL?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    PU?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
    PB?: {
      position_depth: "AF" | "BF";
      rate_freq: number;
      level_mix: number;
    };
  };
}

export interface ZnrSettings {
  isActive: boolean;
  settings: {
    NR?: { threshold: number };
    GT?: { threshold: number };
    DG?: { threshold: number };
  };
}

export interface DriveSettings {
  isActive: boolean;
  settings: {
    code:
      | "FC"
      | "CA"
      | "JC"
      | "NC"
      | "BL"
      | "BC"
      | "ND"
      | "BG"
      | "PU"
      | "OD"
      | "GU"
      | "HB"
      | "FF"
      | "NT"
      | "ED"
      | "DF"
      | "AC";
    gain: number;
    tone: number;
    level: number;
  };
}

export interface ExtraEqSettings {
  isActive: boolean;
  settings: {
    ET?: {
      lo_mid: number;
      presence: number;
      harmonics: number;
    };
    CB?: {
      mic_type: "Co" | "DY";
      mic_pos: number;
    };
  };
}

export interface ModSfxSettings {
  isActive: boolean;
  settings: {
    CH?: {
      depth: number;
      rate: number;
      reso: number;
    };
    SC?: {
      depth: number;
      rate: number;
      reso: number;
    };
    FL?: {
      depth: number;
      rate: number;
      reso: number;
    };
    PT?: {
      depth: number;
      rate: number;
      reso: number;
    };
    PP?: {
      depth: number;
      rate: "UP" | "DN";
      reso: number;
    };
    UB?: {
      depth: number;
      rate: number;
      reso: number;
    };
    ST?: {
      depth: number;
      rate: number;
      reso: number;
    };
    DL?: {
      depth: number;
      rate: number;
      reso: number;
    };
    TE?: {
      depth: number;
      rate: number;
      reso: number;
    };
    DD?: {
      depth: number;
      rate: number;
      reso: number;
    };
    DF?: {
      depth: number;
      rate: number;
      reso: number;
    };
    NP?: {
      depth: number;
      rate: number;
      reso: number;
    };
    HP?: {
      depth: number;
      rate:
        | "C"
        | "C#"
        | "D"
        | "D#"
        | "E"
        | "F"
        | "F#"
        | "G"
        | "G#"
        | "A"
        | "A#"
        | "B";
      reso: number;
    };
  };
}

export interface DelaySettings {
  isActive: boolean;
  settings: {
    code: "DL" | "PD" | "EC";
    time: number;
    feedback: number;
    mix: number;
  };
}
export interface EqSettings {
  isActive: boolean;
  settings: {
    bass: number;
    middle: number;
    treble: number;
  };
}

interface ReverbSettings {
  isActive: boolean;
  settings: {
    HL?: {
      decay: number;
      tone: number;
      mix: number;
    };
    RN?: {
      decay: number;
      tone: number;
      mix: number;
    };
    SP?: {
      decay: number;
      tone: number;
      mix: number;
    };
    ER?: {
      decay: number;
      tone: number;
      mix: number;
    };
    ND?: {
      decay: number;
      tone: number;
      mix: number;
    };
  };
}

export interface IPatch extends mongoose.Document {
  name: string;
  inPedal: boolean;
  pedalCode: string;
  effects: {
    compressor: CompressorSettings;
    wah_efx: WahEfxSettings;
    znr: ZnrSettings;
    drive: DriveSettings;
    eq: EqSettings;
    extra_eq: ExtraEqSettings;
    mod_sfx: ModSfxSettings;
    delay: DelaySettings;
    reverb: ReverbSettings;
  };
}

export interface IDBConnection {
  connection: Connection;
  closeConnection: () => Promise<void>;
}
