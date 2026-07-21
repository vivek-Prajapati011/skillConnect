import Professional from "../model/professional.model.js"

export const completeProfile = async (userId, profileData) => {
  // Validate userId
  if (!userId) {
    throw new Error("User ID is required")
  }

  // Validate profile data
  if (!profileData) {
    throw new Error("Profile data is required")
  }

  // Destructure data
  const {
    name,
    skills,
    experience,
    location,
    bio,
    profileImage,
    serviceRadius,
  } = profileData

  // Name Validation
  if (!name || !name.trim()) {
    throw new Error("Name is required")
  }

  if (name.trim().length < 2) {
    throw new Error("Name must be at least 2 characters long")
  }

  // Skills Validation
  if (!skills) {
    throw new Error("Skills are required")
  }

  if (!Array.isArray(skills)) {
    throw new Error("Skills must be an array")
  }

  if (skills.length === 0) {
    throw new Error("At least one skill is required")
  }

  const uniqueSkills = new Set(skills)

  if (uniqueSkills.size !== skills.length) {
    throw new Error("Duplicate skills are not allowed")
  }

  // Experience Validation
  if (experience === undefined || experience === null) {
    throw new Error("Experience is required")
  }

  if (typeof experience !== "number") {
    throw new Error("Experience must be a number")
  }

  if (experience < 0) {
    throw new Error("Experience cannot be negative")
  }

  // Location Validation
  if (typeof location !== "string") {
    throw new Error("Location must be a string")
  }

  if (!location.trim()) {
    throw new Error("Location is required")
  }

  // Service Radius Validation
  if (serviceRadius === undefined || serviceRadius === null) {
    throw new Error("Service radius is required")
  }

  if (typeof serviceRadius !== "number") {
    throw new Error("Service radius must be a number")
  }

  if (serviceRadius <= 0) {
    throw new Error("Service radius must be greater than 0")
  }

  // Update Professional
  const updatedProfessional = await Professional.findByIdAndUpdate(
    userId,
    {
      name,
      skills,
      experience,
      location,
      bio,
      profileImage,
      serviceRadius,
    },
    {
      new: true,
      runValidators: true,
    }
  )

  // Check if professional exists
  if (!updatedProfessional) {
    throw new Error("Professional not found")
  }

  return updatedProfessional
};