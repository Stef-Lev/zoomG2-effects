import mongoose from 'mongoose';

export interface IPatch extends mongoose.Document {
    id: string;
    name: string;
    inPedal: boolean;
    pedalCode: string;
    low: number;
    mid: number;
    high: number;
  }

  export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    patches: IPatch[];
  }
  