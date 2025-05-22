/**
 * Generates a unique membership number for a new member
 * Format: VOK-XXXX where XXXX is a sequential number
 */
export const generateMembershipNumber = (): string => {
  try {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "{}")

    // Count existing users to determine the next number
    const userCount = Object.keys(users).length

    // Generate a sequential number with leading zeros
    const sequentialNumber = (userCount + 1).toString().padStart(4, "0")

    // Create the membership number
    const membershipNumber = `VOK-${sequentialNumber}`

    return membershipNumber
  } catch (error) {
    console.error("Error generating membership number:", error)

    // Fallback to a random number if there's an error
    const randomNumber = Math.floor(1000 + Math.random() * 9000)
    return `VOK-${randomNumber}`
  }
}
