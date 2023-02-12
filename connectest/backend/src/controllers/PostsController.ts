import { Request, Response } from 'express';
import { ResponseType, ResponseRoutes } from '../types';

const getPosts = async (_: Request, res:Response<ResponseType>): ResponseRoutes  => {
  return res.status(200).json({
    message: 'success',
    data: []
  })
}

export default {
  getPosts
}