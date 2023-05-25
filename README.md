//SHOOMA MOBILE APP
//STEP BY STEP ANALYSIS
//BUILDING FROM SCRATCH

.......NPM INIT -Y......
.......START YOUR APP........
......NOW, SESSION MIDDLEWARE....

Here are some key benefits and use cases of using session middleware in an Express.js app:

User Authentication: Sessions enable you to authenticate users and maintain their authentication state across requests. Once a user logs in, their session is created, and subsequent requests can be associated with that session. This allows you to restrict access to certain routes or resources based on the user's authentication status.

User Sessions: Sessions allow you to store user-specific data that persists across requests. For example, you can store user preferences, shopping cart contents, or any other data that needs to be accessible during a user's visit to your application.

Flash Messages: Flash messages are temporary messages that can be stored in the session and displayed to the user. They are often used to provide feedback or notifications to users after certain actions or operations. For example, showing a success message after a successful form submission.

Cross-Site Request Forgery (CSRF) Protection: Sessions can be used to implement CSRF protection in your application. CSRF attacks occur when an attacker tricks a user's browser into performing unwanted actions on a website. Session-based CSRF tokens can help validate that requests originated from your application and protect against such attacks.

Remember Me Functionality: Sessions can be used to implement "Remember Me" functionality, allowing users to stay logged in even after they close and reopen the browser. This is typically achieved by storing a long-lived session token or identifier in a persistent cookie on the client-side.

Overall, session middleware in Express.js provides a powerful mechanism for managing user sessions, authentication, and maintaining stateful behavior in web applications. It gives you the ability to store and retrieve user-specific data, control access to resources, and enhance the user experience by persisting user states and providing feedback.



......NOW CONFIGURING FLASH MESSAGES MIDDLEWARE......


Configuring flash messages middleware in your Express.js app allows you to display temporary messages or notifications to users. Flash messages are typically used to provide feedback or inform users about the status of a particular action or operation.

Here are some reasons why you might want to configure flash messages middleware in your Express.js app:

User Feedback: Flash messages can be used to provide immediate feedback to users after they perform an action. For example, displaying a success message after a form submission, notifying users about errors in their input, or informing them about the status of a transaction.

Notification System: Flash messages can serve as a notification system within your application. You can use them to alert users about important updates, announcements, or changes in their account status.

User Experience Enhancement: Flash messages help enhance the user experience by providing real-time feedback and improving the overall usability of your application. They provide a way to communicate information to users without the need for additional page reloads or redirects.

Visual Confirmation: Flash messages are typically displayed at the top or bottom of a page, making them visually prominent and easily noticeable to users. This helps ensure that important messages are not missed.

To configure flash messages middleware in your Express.js app, you can use a package like connect-flash or express-flash. These packages provide middleware that stores temporary messages in the session and makes them available in subsequent requests. You can then retrieve and display these messages in your views or route handlers.



........NOW CONFIGURE PASSPORT.....
Configuring Passport in your Express.js app is beneficial when implementing authentication and authorization functionalities. Passport is a popular authentication middleware that provides a straightforward and flexible way to handle user authentication strategies.

Here are some reasons why you might want to configure Passport in your Express.js app:

Authentication: Passport simplifies the process of implementing authentication in your app. It supports various authentication methods, including local username/password authentication, social login (OAuth), and more. Passport abstracts away the complexities of authentication, allowing you to focus on the logic specific to your app.

Strategy-based Authentication: Passport utilizes a strategy-based approach, where each authentication method is implemented as a separate strategy. This modular structure makes it easy to add or remove authentication methods based on your requirements. You can choose from a wide range of existing authentication strategies or create custom ones tailored to your needs.

Middleware Integration: Passport integrates seamlessly with Express.js middleware. By configuring Passport, you can leverage its authentication middleware functions to handle user authentication and authorization throughout your app. Passport simplifies the process of authenticating requests, managing user sessions, and ensuring protected routes are accessible only to authenticated users.

Session Serialization: Passport provides built-in support for session serialization. It allows you to store user information in the session and retrieve it on subsequent requests. This way, you can maintain user sessions and easily access user data without the need for repetitive authentication checks.

Flexibility and Extensibility: Passport offers a high level of flexibility and extensibility. It provides a solid foundation for implementing authentication, but also allows you to customize and extend its functionality to fit your specific requirements. You can tailor the authentication flow, integrate additional security measures, or incorporate third-party libraries alongside Passport.

By configuring Passport in your Express.js app, you gain a powerful toolset for implementing authentication and authorization features with ease. Passport abstracts away the complexities, provides a standardized approach, and simplifies the integration of different authentication methods. It helps you ensure the security of your app, enhance user experience, and focus on other core aspects of your application development.



.......NOW YOU CAN CREATE MODELS DIR TO STORE USER MODEL........
basically to create the user schema using mongoose and hashing out the password in the process
Also, 
In this code, we define a comparePassword method on the userSchema methods. This method compares the provided password with the hashed password stored in the database using bcrypt.compareSync().



.......UPDATE the server.js file to include the MongoDB connection and user registration routes......
In this code, we establish a connection to the MongoDB database using mongoose.connect(). Replace 'mongodb://localhost:27017/shooma' with the appropriate MongoDB connection URL.
We also implement the user registration route (/register). This route validates the username, email, and password, checks if the username or email is already taken using User.exists(), and creates a new user using the User model.
Flash messages are used to display success or error messages, and the user is redirected back to the home page (/) after registration.




......Your app should be running now....

But let's modularise.....folders

In this updated code, we import the User model and define the register function. The function first validates the username, email, and password fields. If any of these fields are missing, it flashes an error message and redirects the user back to the home page (/).

Next, it checks if the provided username or email already exists in the database using User.exists(). If a matching user is found, it flashes an error message and redirects the user back to the home page.

If the username and email are available, it creates a new User object and saves it to the database using newUser.save(). If the save operation is successful, it flashes a success message and redirects the user back to the home page. If an error occurs during the save operation, it flashes an error message and redirects the user back to the home page.

Save the changes to the userController.js file.
With these updates, the registration logic is now separated into the userController.js file within the controllers folder. This improves code organization and keeps the responsibilities of each module clear.

Give it a try and let me know if you encounter any issues or have further questions!



