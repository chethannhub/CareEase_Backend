import mongoose from "mongoose";

const billsSchema = new mongoose.Schema({
    billId:{type: String, required: true },
    patient: {type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: false },
    noOfBills: {type: Number , required:true },
    pmtStatus:{type: String, required: true},
    total:{type: Number , required:true},
    reservationdate:{type:Date ,required : true}
});

export const Bills = mongoose.model("Bills", billsSchema);



