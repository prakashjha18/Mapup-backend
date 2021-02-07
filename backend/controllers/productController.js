import asyncHandler from 'express-async-handler'
import { feature } from '@turf/helpers'
import lineIntersect from '@turf/line-intersect'
import { parse } from '../data/lineStrings.js'
import { performance } from 'perf_hooks'

const getintersection = asyncHandler(async (req, res) => {
  try {
    const t1 = performance.now()
    const lineString = feature(req.body)
    const coords = parse()
    //console.log(coords)
    const out = coords
      .map((xy) => {
        const point = lineIntersect(lineString, xy)

        if (point.features.length > 0) {
          return {
            id: xy.properties.id,
            points: point.features.map((f) => f.geometry.coordinates),
          }
        }
        return null
      })
      .filter((n) => n !== null)
    const t2 = performance.now()
    const time = t2 - t1
    //console.log(time)
    res.json({ intersections: out, time: time })
  } catch (err) {
    if (err.message === 'Unknown Geometry Type') {
      res.status(500).json(err.message)
      return
    }
    res.status(500).json(err)
  }
})
export { getintersection }
