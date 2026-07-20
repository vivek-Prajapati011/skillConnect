import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "/images/default-avatar.png",
    },

    skills: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        experienceInYears: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number], // [longitude, latitude]
      },
    },

    address: {
      fullAddress: {
        type: String,
        trim: true,
      },

      city: {
        type: String,
        trim: true,
      },

      state: {
        type: String,
        trim: true,
      },

      pincode: {
        type: String,
        trim: true,
      },
    },

    serviceRadius: {
      type: Number,
      default: 5, // kilometers
      min: 1,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    aadhaarNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    aadhaarVerified: {
      type: Boolean,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Geospatial index for nearby search
professionalSchema.index({
  location: "2dsphere",
});

const Professional = mongoose.model("Professional", professionalSchema);

export default Professional;
