import { Request, Response } from "express";
import { ResponseType, ResponseRoutes } from "../types";
import User from '../schemas/userSchema'
import { PhotoCache } from '../schemas/cacheSchemas'
import { v4 } from 'uuid'
import Post from '../schemas/postSchema'
import { faker } from '@faker-js/faker';

const getPosts = async (_: Request, res: Response<ResponseType>): ResponseRoutes => {
  const users = await User.find({});
  const photos = await PhotoCache.find({});

  for (let { alt, originalWidth, originalHeight, avg_color, src } of photos) {
    const randomIndex: any = getRandomIndex(0, 171);
    const randomHour = getRandomIndex(0, 23);
    const randomMinutes = getRandomIndex(0, 59);
    const randomSeconds = getRandomIndex(0, 59);

    const { login, picture } = users[randomIndex]
  
    console.log(`2022-12-30T${randomHour === 0 ? '00' : randomHour}:${randomMinutes}:${randomSeconds}.000Z`)

    const formattedPost: any = {
      uuid: v4(),
      _user: {
        uuid: login.uuid,
        username: login.username,
        picture
      },
      description: faker.hacker.phrase(),
      photos: [{
        originalWidth,
        originalHeight,
        avg_color,
        alt,
        src: src.medium
      }],
      uploadDate: new Date(`2022-12-30T${randomHour < 10 ? `0${randomHour}` : randomHour}:${randomMinutes < 10 ? `0${randomMinutes}` : randomMinutes}:${randomSeconds < 10 ? `0${randomSeconds}` : randomSeconds}.000Z`),
      likes: {
        amount: 0,
        users: []
      }
    }
    await Post.create(formattedPost)
  }

  return res.send({
    message: 'success',
    data: users
  })
}

function getRandomIndex(min: number, max: number): Number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default { getPosts }