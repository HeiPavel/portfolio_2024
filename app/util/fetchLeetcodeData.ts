type LeetcodeData = () => Promise<[number, number][]>

export const fetchLeetcodeData:LeetcodeData = async () => {
  try {
    const response = await fetch(
      'https://alfa-leetcode-api.onrender.com/userProfile/HeiPavel',
      {
        next: {
          revalidate: 86400
        }
      }
    )
    const jsonResponse = await response.json()
    return [
      [jsonResponse.easySolved, jsonResponse.totalEasy],
      [jsonResponse.mediumSolved, jsonResponse.totalMedium],
      [jsonResponse.hardSolved, jsonResponse.totalHard]
    ]
  } catch(error) {
    console.log(error)
    return []
  }
}