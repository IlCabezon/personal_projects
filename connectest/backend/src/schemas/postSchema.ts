import { Schema, models, model, Types } from 'mongoose';
import { PostType } from '../types';
import { v4 } from 'uuid';

const postSchema = new Schema<PostType>({
  uuid: {
    type: String,
    default: v4()
  },
  _user: {
    uuid: {
      type: String
    },
    username: {
      type: String
    },
    picture: {
      type: String
    }
  },
  description: {
    type: String,
    required: true
  },
  photos: [{
    originalWidth: {
      type: Number
    },
    originalHeight: {
      type: Number
    },
    avg_color: {
      type: String
    },
    alt: {
      type: String
    },
    src: {
      type: String
    },
  }],
  uploadDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  likes: {
    amount: {
      type: Number
    },
    users: [
      { type: Types.ObjectId, ref: 'User' }
    ]
  }
});

const Post = model<PostType>('Post', postSchema);
export default models.Post || Post;