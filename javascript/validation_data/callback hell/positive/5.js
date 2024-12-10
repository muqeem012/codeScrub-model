function startQuiz(userId, quizId) {
    console.log("Starting quiz...");

    getQuizQuestions(quizId, function (error, questions) {
        if (error) {
            console.error("Error getting quiz questions:", error);
            return;
        }

        console.log("Quiz questions retrieved!");

        sendQuestionsToUser(userId, questions, function (error) {
            if (error) {
                console.error("Error sending questions to user:", error);
                return;
            }

            console.log("Questions sent!");

            receiveAnswersFromUser(userId, function (error, answers) {
                if (error) {
                    console.error("Error receiving answers:", error);
                    return;
                }

                console.log("Answers received!");

                evaluateAnswers(answers, function (error, result) {
                    if (error) {
                        console.error("Error evaluating answers:", error);
                        return;
                    }

                    console.log("Answers evaluated!");

                    sendResultToUser(userId, result, function (error) {
                        if (error) {
                            console.error("Error sending result to user:", error);
                            return;
                        }

                        console.log("Result sent!");
                    });
                });
            });
        });
    });
}