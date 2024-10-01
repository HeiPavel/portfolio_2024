import LeetCode from 'leetcode-query'

export const fetchLeetcodeData = async () => {
  try {
    const leetcode = new LeetCode()
    const user = await leetcode.user('HeiPavel')
    const difficult = ['easy', 'medium', 'hard']
    const problemSolved: [number, number][] = []

    if (user.matchedUser) {
      for (const diff of difficult) {
        const solvedProblems = user.matchedUser.submitStats.acSubmissionNum.find(prob => prob.difficulty.toLowerCase() === diff)?.count ?? 0
        const totalProblems = user.allQuestionsCount.find(prob => prob.difficulty.toLowerCase() === diff)?.count ?? 0
        problemSolved.push([solvedProblems, totalProblems])
      }
    }

    return problemSolved
  } catch(error) {
    console.log(error)
    return []
  }
}