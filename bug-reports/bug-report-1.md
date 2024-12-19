**Title:** Chat is unaccessible with browser window width under 770 pixels.

**Steps to reproduce:**

1. Open the web application with two different sessions and screen sizes over
   770 pixels
2. Register a user and log in to both accounts on separate sessions
3. Add the users as friends
4. Start a chat between the users
5. Reduce the browser window width below 770 pixels for one or both users

**Expected results:**

The chat window should be accessible through some means with browser window
widths under 770 pixels. For example, the chat window could open when the
conversation is clicked on the conversations page.

**Actual behavior:**

The chat window in the bottom left disappears when the browser window width is
under 770 pixels. It's only possible to see the latest message on the
conversations page.
