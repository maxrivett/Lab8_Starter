# Lab 8 - Starter

### 1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

**Within a Github action that runs whenever code is pushed** 
Manually run them locally before pushing code
Run them all after all development is completed

<br>
The reason for this is so that the automated tests run whenever a new push occurs, meaning that every single change is carefully examined. This is beneficial because it ensures that the code works with every new change, and if it doesn't, you know which commit caused the failure.

### 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, end-to-end tests are better suited for testing workflows or entire systems, a unit test would be better for a function.

### 3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

It may be difficult to test a message feature with a unit test, since this would require online connection between multiple devices, making it a difficult thing to test. This would be a case where it could be broken down into many small unit tests that could test all of the small working parts within the feature, but a unit test for the messaging feature as a whole would not be a good idea.



### 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, a unit test would be perfect to test this since it is a definitive and small part of a feature.