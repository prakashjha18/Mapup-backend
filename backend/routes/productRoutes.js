import express from 'express'
const router = express.Router()
import {
  getintersection,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/intersections').post(protect,getintersection)



export default router