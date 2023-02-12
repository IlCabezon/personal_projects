import { Response } from 'express';
import { Types } from 'mongoose';

export type ResponseRoutes = Promise<Response<ResponseType>>;

export interface CacheConnection {
  connected: boolean
  dbName: string
};

export interface ResponseType {
  message: string
  data?: any[]
  err?: any | unknown
};

export interface Tech {
  name: string
};

export interface UserType {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    validation_code: string
  }
  dob: {
    date: Date
    age: number
  }
  registered: {
    date: Date
    age: number
  }
  phone: string
  cell: string
  identifier: {
    name: string
    value: string
  }
  picture: String
  nat: string
};

export interface PostType {
  uuid: string
  _user: {
    uuid: string,
    username: string
    picture: string
  }
  description: string
  photos: Photo[]
  uploadDate: Date
  likes: {
    amount: Number,
    users: String[]
  }
};

interface Photo {
  originalWidth: number,
  originalHeight: number,
  avg_color: string,
  alt: string,
  src: string
};