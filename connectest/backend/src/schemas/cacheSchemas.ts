import { Schema, models, model } from 'mongoose';

interface PhotoCacheType {
  id: number,
  width: number,
  height: number,
  avg_color: string,
  src: {
    original: string,
    large: string,
    medium: string,
    small: string
    portrait: string
  },
  alt: string
}

const photoCache = new Schema<PhotoCacheType>({
  id: {
    type: Number,
    required: true
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  avg_color: {
    type: String
  },
  src: {
    original: {
      type: String
    },
    large: {
      type: String
    },
    medium: {
      type: String
    },
    small: {
      type: String
    },
    portrait: {
      type: String
    }
  },
  alt: {
    type: String
  }
})

const PhotoCache = models?.PhotoCache || model<PhotoCacheType>('PhotoCache', photoCache)
export {
  PhotoCache
}