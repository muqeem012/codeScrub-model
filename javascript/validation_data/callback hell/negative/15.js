async function runExample5() {
    try {
      const token = await getToken();
      const userData = await getUserData(token);
      const posts = await getUserPosts(userData.id);
      const comments = await getPostComments(posts[0].id);
      const filtered = await filterSpamComments(comments);
      await saveCommentsToDB(filtered);
      console.log("Comments saved successfully!");
    } catch (err) {
      console.error(err);
    }
  }