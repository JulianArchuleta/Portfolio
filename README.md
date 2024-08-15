# Welcome to my Portfolio
Hi, I am **Julian Archuleta**, an undergraduate at **Weber State University** Majoring in **Computer Science**.
# Projects
Below are projects I have worked on!
## [Banking Application](https://github.com/JulianArchuleta/Portfolio/tree/main/Banking-Application)

> Click the link above to view the code in GitHub!

![Banking app gif demo](/gifs/banking-app.gif)
###Description
Banking Application Development: Full-Stack Implementation

I transformed a basic banking application into a fully developed, role-based system with a React front end and a MongoDB/Node.js/Express backend. The application now supports three distinct user roles: Administrator, Employee, and Customer, each with tailored permissions and functionalities.

Frontend:

- **User Authentication**:
  - Implemented a secure login system requiring a username, password, and verification of credentials.
- **Role Management**:
  - Administrators can manage user roles, promoting or demoting users between Customer, Employee, and Administrator roles.
- **Account Management**:
  - Customers can manage three types of accounts—savings, checking, and investment—including depositing, withdrawing, and transferring funds. Employees can perform similar actions for any customer account.
- **Transaction History**:
  - Provided both comprehensive and individual transaction histories, displaying dates and transaction details.
- **Clean UI Design**:
  - Utilized Bootstrap for a polished and consistent UI, ensuring a professional look and feel with well-aligned elements.

Backend:

- **Secure Authentication**:
  - Implemented password hashing using sha-256 to enhance security, storing only the hashed version of passwords in the database.
- **Full CRUD Operations**:
  - Supported all front-end functionalities, including account operations and user role management.
- **Role-Based Access Control**:
  - Ensured appropriate access levels for different user roles, with administrators having full access and employees and customers having restricted capabilities.
- **Scalable Architecture**:
  - Designed the backend to be easily extendable for future enhancements, including additional security measures and features.

### Summary: 
This project showcases my ability to design and implement a full-stack application with secure authentication, role-based access control, and a clean, user-friendly interface.

## [Hangman](https://github.com/JulianArchuleta/Portfolio/tree/main/Hangman)

> Click the link above to view the code in GitHub!

![hangman gif demo game](/gifs/hangman-game.gif)

### Description
Hangman Game Development: Full-Stack Collaborative Project

In this group project, we developed a full-stack Hangman game using React for the front end, Express for the backend, and MongoDB for data storage. The game was designed with both user engagement and fair play in mind, ensuring a fun and challenging experience for players.

Game Logic:

- **User Experience**:
  - Players start by entering their name before the game begins with a traditional hangman setup. Players guess letters, with correct guesses revealing the letters and incorrect guesses progressing the hangman and displaying the wrong letters.
Session Management: User sessions were implemented to store the player's name throughout the game, avoiding re-entering it after each round.
- **Random Word Selection**:
  - The game randomly selects words from a database containing over 1,000 potential words, ensuring a varied and unpredictable experience.
- **Fair Play**:
  - The chosen word is never sent to the client until the game ends, preventing players from cheating by inspecting the DOM.
  
High Scores:

- **Leaderboard**:
  - After each game, a top 10 leaderboard is displayed, showing the best scores for words of similar length. The leaderboard tracks the player's name, the number of guesses made, and the word length.
Persistent Scoring: High scores are stored in a MongoDB database, allowing for persistent tracking of the top players.
Collaboration and Code Management:

- **Version Control**:
  - The project was managed using Git, with all group members contributing through commit, push, and pull operations, ensuring seamless collaboration and version control.
- **Cross-Platform Compatibility**:
  - The game was successfully tested and run on all developers' machines, ensuring a consistent experience across different environments.

### Summary: 
This project highlights my ability to work in a team, manage version control, and develop a complete, interactive web-based game with a focus on both functionality and user experience.





