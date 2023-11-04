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
    code: "AW" | "AR" | "BS" | "TR" | "PH" | "RG" | "SL" | "PU" | "PB";
    position_depth: "AF" | "BF" | number;
    rate_freq: number;
    level_mix: number;
  };
}

export interface ZnrSettings {
  isActive: boolean;
  settings: {
    code: "NR" | "GT" | "DG";
    threshold: number;
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
export interface EqSettings {
  isActive: boolean;
  settings: {
    bass: number;
    middle: number;
    treble: number;
  };
}
type EtEqSettings = {
  lo_mid: number;
  presence: number;
  harmonics: number;
};
type CbEqSettings = {
  mic_type: "Co" | "DY";
  mic_pos: number;
};

export interface ExtraEqSettings {
  isActive: boolean;
  settings: {
    code: "ET" | "CB";
  } & (EtEqSettings extends { code: "ET" }
    ? EtEqSettings
    : CbEqSettings extends { code: "CB" }
    ? CbEqSettings
    : never);
}

export interface ModSfxSettings {
  isActive: boolean;
  settings: {
    code:
      | "CH"
      | "SC"
      | "FL"
      | "PT"
      | "PP"
      | "UB"
      | "ST"
      | "DL"
      | "TE"
      | "DD"
      | "DF"
      | "NP"
      | "HP";
    depth: number;
    rate:
      | number
      | "UP"
      | "DN"
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

export interface ReverbSettings {
  isActive: boolean;
  settings: {
    code: "HL" | "RN" | "SP" | "ER" | "ND";
    decay: number;
    tone: number;
    mix: number;
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

export type AllSettings =
  | CompressorSettings
  | WahEfxSettings
  | ZnrSettings
  | DriveSettings
  | EqSettings
  | ExtraEqSettings
  | ModSfxSettings
  | DelaySettings
  | ReverbSettings;

export type SettingsObject =
  | CompressorSettings["settings"]
  | WahEfxSettings["settings"]
  | ZnrSettings["settings"]
  | DriveSettings["settings"]
  | EqSettings["settings"]
  | ExtraEqSettings["settings"]
  | ModSfxSettings["settings"]
  | DelaySettings["settings"]
  | ReverbSettings["settings"];

export type SettingsWithCode =
  | WahEfxSettings
  | ZnrSettings
  | DriveSettings
  | ExtraEqSettings
  | ModSfxSettings
  | DelaySettings
  | ReverbSettings;
