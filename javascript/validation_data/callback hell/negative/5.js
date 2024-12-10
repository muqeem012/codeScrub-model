async function startQuiz(userId, quizId) {
    try {
        console.log("Starting quiz...");

        const questions = await getQuizQuestions(quizId);
        console.log("Quiz questions retrieved!");

        await sendQuestionsToUser(userId, questions);
        console.log("Questions sent!");

        const answers = await receiveAnswersFromUser(userId);
        console.log("Answers received!");

        const result = await evaluateAnswers(answers);
        console.log("Answers evaluated!");

        await sendResultToUser(userId, result);
        console.log("Result sent!");

    } catch (error) {
        console.error("Error occurred:", error);
    }
}