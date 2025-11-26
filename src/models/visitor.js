export const VisitorModel = {
  name: 'visitors',
  schema: {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\+?[\d\s\-\(\)]{10,}$/, 'Please enter a valid phone number']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    numberOfVisitors: {
      type: Number,
      required: [true, 'Number of visitors is required'],
      min: [1, 'There must be at least 1 visitor'],
      max: [50, 'Cannot exceed 50 visitors']
    },
    from: {
      type: String,
      required: [true, 'From location is required'],
      trim: true,
      maxlength: [200, 'From location cannot exceed 200 characters']
    },
    to: {
      type: String,
      required: [true, 'To location is required'],
      trim: true,
      maxlength: [200, 'To location cannot exceed 200 characters']
    },
    visitDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
};