import express from 'express'
import { doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete , doctorDashboard, doctorProfile, updateDoctorProfile} from '../controllers/doctorController.js'
import autoDoctor from '../middlewares/authDoctor.js'
const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',autoDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', autoDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', autoDoctor, appointmentCancel)
doctorRouter.get('/dashboard', autoDoctor, doctorDashboard)

doctorRouter.get('/profile',autoDoctor, doctorProfile)
doctorRouter.post('/update-profile',autoDoctor, updateDoctorProfile)
export default doctorRouter