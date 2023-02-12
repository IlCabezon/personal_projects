import { Request, Response } from "express";
import { ResponseType, ResponseRoutes } from "../types";
import { PhotoCache } from '../schemas/cacheSchemas'
import axios from "axios";


export const fetchPhotos = async (_: Request, res: Response<ResponseType>): ResponseRoutes => {
  const pixelPhotosHeaders = {
    headers: {
      "Accept-Encoding": "gzip,deflate,compress",
        'Authorization': '563492ad6f9170000100000189f8d7a346eb4814991eac3f62a58b6f'
    }
  }
 
  const { data: page1 }: any = await axios.get('https://api.pexels.com/v1/search/?page=1&per_page=80&query=space', pixelPhotosHeaders);
  const { data: page2 } : any = await axios.get('https://api.pexels.com/v1/search/?page=2&per_page=80&query=space', pixelPhotosHeaders);
  const { data: page3 } : any = await axios.get('https://api.pexels.com/v1/search/?page=3&per_page=80&query=space', pixelPhotosHeaders);
  const { data: page4 } : any = await axios.get('https://api.pexels.com/v1/search/?page=4&per_page=80&query=space', pixelPhotosHeaders);

  const formattedPhotos : any = [...page1.photos, ...page2.photos, ...page3.photos, page4.photos];

  for (let { id, width, height, avg_color, src, alt } of formattedPhotos) {
    if (!src) {
      continue
    }

    const formattedPhotoRegister = {
      id,
      width,
      height,
      avg_color,
      src: {
        original: src.original,
        large: src.large,
        medium: src.medium,
        small: src.small,
        portrait: src.portrait
      },
      alt
    };
    
    await PhotoCache.create(formattedPhotoRegister)
  }

  return res.send({
    message: 'success',
    data: []
  })
}

export default {
  fetchPhotos
}