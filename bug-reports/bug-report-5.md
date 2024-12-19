**Title:** Timestamp format of comments is inconsistent

**Steps to reproduce:**

1. Open the web application in a new browser session
2. Log in as a user
3. Click your profile name in the right top corner to navigate to your profile
   page
4. Publish a new post on your wall
5. Comment on the post through the UI
6. Create another comment on the same post through the database or API with
   yesterday's timestamp.

**Expected results:**

The timestamp format should be consistent for all comments.

**Actual behavior:**

Comments posted on the same day show only the time while comments posted on
other days display both the date and the time. This inconsistency can cause
confusion.
