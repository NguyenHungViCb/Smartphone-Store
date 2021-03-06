import mongoose from 'mongoose'

const paymentSchema = mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Order"
  },
  paymentMethod: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'PaymentMethod'
  },
  paymentAmount: {
    type: Double,
    required: true
  },
  paymentAt: {
    type: Date,
    required: true
  }
})

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment;
