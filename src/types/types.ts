import mongoose, { Connection } from "mongoose";

export interface CompressorSettings {
  isActive: boolean;
  sense: number;
  attack: "FS" | "SL";
  level: number;
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
  setting:
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
  };
}

export interface DelaySettings {
  isActive: boolean;
  setting: "DL" | "PD" | "EC";
  time: number;
  feedback: number;
  mix: number;
}

export interface ReverbSettings {
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
  };
}

export interface IPatch extends mongoose.Document {
  id: string;
  name: string;
  inPedal: boolean;
  pedalCode: string;
  compressor: CompressorSettings;
  wah_efx: WahEfxSettings;
  znr: ZnrSettings;
  drive: DriveSettings;
  eq: {
    bass: number;
    middle: number;
    treble: number;
  };
  extra_eq: ExtraEqSettings;
  mod_sfx: ModSfxSettings;
  delay: DelaySettings;
  reverb: ReverbSettings;
}

export interface IDBConnection {
  connection: Connection;
  closeConnection: () => Promise<void>;
}
