**Title:** Canceled friend request remains in recipient's notifications

**Steps to reproduce:**

1. Open the web application in two different sessions
2. Register two users and log in to both accounts on separate sessions
3. Send a friend request from one user to another
4. Cancel the friend request from the sender's side
5. View the notification from the recipient's side

**Expected results:**

The notification should be removed if the sender cancels the friend request.

**Actual behavior:**

The notification remains as unread with a red '1' indicator. When the recipient
clicks on the notification indicator and goes to the notifications page, the
"request" link redirects them to the incoming friend requests page where only
the text "No results." is displayed.
