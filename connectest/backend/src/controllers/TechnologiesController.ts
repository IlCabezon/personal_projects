import { Request, Response } from 'express'
import { ResponseType, ResponseRoutes, Tech } from '../types'
import Technology from '../schemas/technologySchema'
import { inputCleaner } from '../utils/inputCleaner'

async function getTechnologies (_: Request, res: Response<ResponseType>): ResponseRoutes {
  try {
    const techStack = await Technology.find()

    return res.status(200).json({
      message: 'Data fetched succesfully.',
      data: techStack
    })
  } catch (err) {
    return res.status(400).json({
      message: 'Error occurred in get technologies.',
      err
    })
  }
}

async function createOneTechnolgy (req: Request, res: Response<ResponseType>): Promise<void> {
  const { name } = req.body

  if (name === undefined) {
    res.status(400).json({
      message: 'Error: Name is required.'
    })
  }
  try {
    await Technology.create({ name })

    res.status(200).json({
      message: 'Technology created succesfully.'
    })
  } catch (err) {
    res.status(400).json({
      message: 'Error occurred in create one technology.',
      err
    })
  }
}

async function createTechnologies (req: Request, res: Response<ResponseType>): Promise<void | Response<ResponseType>> {
  const techs = req.body

  if (techs === undefined) {
    res.status(400).json({
      message: 'Error: Techs are required.'
    })
  }
  try {
    await Technology.bulkWrite(
      techs.map((tech: Tech) => ({
        updateOne: {
          filter: {
            $or: [
              {
                name: {
                  $regex: inputCleaner(tech.name)
                }
              },
              {
                name: {
                  $regex: tech.name
                }
              }
            ]
          },
          update: {
            $set: {
              name: tech.name.trim()
            }
          },
          upsert: true
        }
      }))
    )

    res.status(200).json({
      message: 'Technologies created succesfully.'
    })
  } catch (err) {
    res.status(400).json({
      message: 'Error occurred in create technologies.',
      err
    })
  }
}

export { getTechnologies, createOneTechnolgy, createTechnologies }
