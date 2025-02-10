import { Appointment } from "../models/appointment.js";

export const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAppointments = async (req, res) => {
    try {
        const { date, doctor, status } = req.query;
        const filter = {};
        if (date) filter.date = date;
        if (doctor) filter.doctor = doctor;
        if (status) filter.status = status;

        const appointments = await Appointment.find(filter)
            .populate("patient", "name")
            .populate("doctor", "name specialization deleted");
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

export const updateAppointmentStatus = async (req, res) => {
    const { appointmentId } = req.params;
    const { status } = req.body;  

    try {
        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId, 
            { status }, 
            { new: true } 
        );

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.status(200).json(appointment); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
