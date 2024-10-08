# APOD data S&R systems project (reworked university project)
Welcome to the (a) Astronomy Picture Of the Day viewing webapp. When I worked on this project with a group in class, it was intended to teach collaborative software engineering abilities. Now, I will be using this project as a launching point to further hone my web development skills. The end goal is to have a functional (though maybe not useful) place for interested users to go to view the picture of the day, and get recommendations for other images with interesting explanations they might enjoy. 

Goals for this project:
- Become a better web developer by practicing creating an Express app from scratch.
- Practice my SQL and database management skills for a site with user accounts and simple data needs.
- Research and implement basic security measures for the site and database.
- Experiment with content based to start and eventually with enough data, user based Search and Recommendation systems.

Follow along with my development journey!

## Design Documents
### Overview
As a web app, my version of the APOD viewer and Search & Recommendation system will serve users APOD images and allow them to like and discover more APOD images. This project exists as an avenue for me to practice and refine my coding abilities. As such, it is not a product designed with a widespread userbase in mind, nor is it intended to meet many stakeholder needs other than my own, though I will be designing for a target audience. At the end of this project, I will have demonstrated my ability to design and create a web app, use and manage data, and recommend users content based off their preferences. 

### Scope
The MVP for this project will be an express web app that displays images and image blurbs produced from NASAs APOD API. Users will be able to like images they find interesting, either due to the image or explanation. They will be able to log in and view those images, select their favorites, and see recommendations based off their liked images. 

For an MLP, features that allow users to report problems with image displays, search images by category, and be recommended images based on other similar users are necessary. Additionally, an MLP would require stylistic branding and smooth navigation, as well as minimal loading delays.

Regardless of MVP or MLP, the product is not marketable, and there is no intention of attempting to monetize any aspect of the site. It does not have a dedicated server, so scalability is minimal. This is one project of many I am working on for my portfolio, and as such the functions must all pertain exactly to the stated goal of displaying APOD images.

### Stakeholders
The primary stakeholders for this project are those who:
- enjoy content produced by NASA
- want to find desktop background images of space
- want to learn more about space generally

The secondary stakeholders for this project are:
- Me
- Recruiters/Interviewers

### DB Schema
The data needs for this project are fairly straightforward. A relational DB (sql) will maintain a table of users, APOD images, and views (the relationship between them).

### Agile
Though I want to demonstrate my understanding of the Agile workflow, because this is an individual project without need for SCRUM style cooperative engineering, I am going to keep the unnecessary baggage to a minimum and simple create a vision to refer back to if I get lost while designing.

Themes/Overarching project goals: Exploration, Personalization, Refined Simplicity
Epics/Large functional feature groups: Account Management, Image Feed, Image Recall, Recommendations, Content Based Personalization, Visuals

### Example User Stories
As a person with minimal knowledge of astronomy, I want a simple site that allows me to explore astronomy topics so that I can learn about space in an approachable format. 
Given I visited this site with minimal astronomy knowledge, when I spend some time reading explanation and liking images I then will have a better idea of what astronomy topics interest me.

As a person looking to find cool astronomy images, I want a resource that tracks my liked and favorite images from APOD so that I can find and retrieve them quickly. 
Given I visit this site often looking for cool images, when I want to use them I will be able to quickly log in and view all my liked and favorited images. 

## Feature Backlog
### Criteria
As with most feature backlogs, each feature will be scored by some metric. What works best for me is a simple 1-2-3 score, as well as an MLP/MVP marker. 
A 1 task is the easiest to complete, taking at most a couple hours. Tasks that have been mostly implemented elsewhere on the site or in other projects, and things I am certain how to implement might also fall into this category. 
A 2 task is one that might take up to half a workday to complete. These tasks might include the creation of new resources, writing longer documents, or the completion of a task that I do not already know how to implement. 
A 3 task is one that could take up to a day to complete. These are tasks that I will need to learn something to complete, will require large modifications to site structures, or are likely to require extensive debugging. 
Any task predicted to take more than a day of work should be broken into smaller tasks, or put in Future Development until resources can be dedicated to solving the problem if I lack the knowledge on how to approach it. 
A V marker shows that the feature is necessary for a Minimum Viable Product.
An L marker shows that the feature is necessary for a Minimum Loveable Product.

### Feature List
Functional Features:
- [x] Homepage displays APOD image upon loading (2, V)
- [x] Explanation and title displayed alongside image on Homepage (1, V)
- [x] Like and Next buttons display under explanation (1, V)
- [x] Homepage html is responsive (2, L)
- [ ] Next button produces a random image from the APOD api (1, V)
- [ ] Next button produces an image the user has not seen from the APOD api (2, L)
- [ ] Nav Bar includes Create Account option which leads to an account creation workflow if not signed in (1, V)
- [ ] User can make an account with a username and password (2, V)
- [ ] Nav Bar includes Sign In option leading to a sign in workflow if not signed in (1, V)
- [ ] User can sign out of their account (2, V)
- [ ] Nav bar includes sign out option if user is signed in (1, V)
- [ ] User can sign into a previously made account with username and password stored in DB (2, V)
- [ ] Session implemented to allow user to be signed in across site (3, V)
- [ ] Pressing either Like or Next updates the Viewed db table if signed in (1, V)
- [ ] Add profile page route (1, V)
- [ ] Nav bar includes profile option (1, V)
- [ ] Profile page displays liked images (2, V)
- [ ] Sorting options displayed on profile liked page (2, L)
- [ ] Liked images can be sorted by date liked, asc or dsc (1, L)
- [ ] Liked images can be sorted by date of APOD, asc or dsc (1, L)
- [ ] Sorting options displayed on profile Favorited page (2, L)
- [ ] Favorited images can be sorted by date favorited, asc or dsc (1, L)
- [ ] favorited images can be sorted by date of APOD, asc or dsc (1, L)
- [ ] Favorite button displayed when like button is clicked (2, V)
- [ ] clicking favorite button updates the view table in the DB (1, V)
- [ ] Favorites can be viewed from profile page (2, V)
- [ ] Add un-like button when viewing image from profile likes (1, L)
- [ ] Add un-favorite button when viewing image from profile favorites (1, L)
- [ ] Un-like button functionality (1, L)
- [ ] Un-Favorite button functionality (1, L)
- [ ] Whenever an APOD image is displayed, ensure it is in the images db table (1, V)
- [ ] Store tokenized image explanations in db (2, V)
- [ ] Store dictionary of tokens in db (2, V)
- [ ] Create content based recommendation script (3, V)
- [ ] Use recommendation script when next button is clicked 50% of the time (3, V)
- [ ] Display message when next image is produced by a recommendation (1, V)

## Future Development
These are ideas I hope to add to the backlog in the future, but either are not part of the MVP or are too complex for me to break down into tasks at this moment. 
- Allow users to create folders of images
- Predict categories based off explanations to implement search functionalities 

## Development Updates
As regularly as I feel (with the goal of every day) I will be updating the status of the project, the current tasks and my general thoughts on where my work is headed. 

### Update 7:
I spent some time refreshing my HTML and CSS skills to rework the homepage for its new purpose. Before continuing much further with restoring functionality, I think it is necessary to spend some time updating the design document and constructing a task backlog so I can better envision what I want to work towards and the most efficient way to get there. 

### Update 6:
Current (large scale) feature list to implement:
- [x] Add page loading script
- [ ] Make buttons display new images
- [ ] Add data to database when buttons pressed

To implement the desired functionality on homepage loading, that being to display the Astronomy Picture of the Day, no connection to the database is needed. The data is retrieved from the NASA API, and is then added to a template html of the homepage. The CSS needed to be reworked to display the image and description properly, which means the HTML also had to be updated. Reworking the flexboxes took far longer than expected, and while I am still fighting with mysterious margins and maddening padding, I have the basic layout working. Next steps will be making the page look nice, and adding the navbar back in at the top. Before I add navbar functionality (which will require the other pages) I will refocus on the button and db functionality. 

### Update 5:
Implement tables in database. Attempt to get "thin vertical slice" of app working, with app connecting to DB and the APOD API.
To start off, I want to disable much of the functionality that was present in the previous final project. I heavily modified the app.js file to 
a. remove everything that I wouldn't use while testing basic functionality and
b. Anything I didn't fully understand

Working my way through constructing the homepage for the site, I found that the project base does not use view engines. Personally, I am ok with this. Some files appear redundant because of it, but I believe with a clearer file structure, static html files can be retrieved, modified, and sent with res.send instead of res.render. The static page will be read from the static folder with file promises, then the dynamic content will be added and the new html will be sent as a response. I am aware that this can add complexity when using scripts in the html files, but those issues will at least be in my control instead of outsourced to a template engine. 

Interesting discovery for today: my express settings have my app running such that a trailing slash is ignored.

### Update 4:
Exploring the NASA APIs, I discovered that while I thought (and am largely more interested in) the rover images would be a good basis for a project, they're all rather.. similar. The Astronomy Photo of the day has images in a range that could be classified and grouped and possibly labeled for use in machine learning. Generally speaking, it's just mroe fun to work with. 

It appears that the APOD API used to return tags along with images, but this feature has been discontinued. For building search tools in the future, tags will either need to be added, or images searched for matching explanations. 

Feature Brainstorming (with relative time rankings):
- View one random APOD image (2)
- View the explanations/descriptions for the images (2)
- View non-repeating images (1)
- Make an account with a username and password (3)
- Log in/out of account (2)
- Like an image (2)
- View liked images (1)
- Favorite images (2)
- View favorite images (1)

Database requirements:
- Store user data
- Store the links to images and data about them
- Associate users with images and preferences about those images

Site requirements:
- Request data from the NASA API
- Connect to mysql database
- Request data from mysql database
- Have a logged in/not logged in view

Possible Entity Relationship Diagram for storing users, APOD images, and their relationships
![Possible ERD](public/images/apod.drawio.png)


### Update 3:
Over the last 3 days I have fully re-familiarized myself with the project and have planned a trajectory for the continued development. The old Care/DontCare project was constructed with Express JS, and is a framework I am familiar enough with to continue development in. The database used previously to store news articles and user data was MongoDB, which as a noSQL, and non relational database, doesn't make much sense for what I had in mind. I am also familiar with mysql server and have a machine I can dedicate to running the server, so I will use that as my database moving forward. 

The new concept for the project will use similar functionality at its base. Users will be prompted to choose whether or not they like something displayed to them, however instead of caring or not caring about news topics, users will say whether they found an image from NASAs Mars rovers interesting or not. This data can then be used to recommend images, or find popular images in the catalogue of images. 

I am choosing to pursue this idea because it allows for continued development starting with basic skills and progressing over time. I can start off with practicing web development, API use, data storage, and design. Later I can work on search and recommendation systems to show users interesting images, and eventually incorporate machine learning to identify interesting images. 

### Update 1: 
Retrieve files and familiarize myself with the project again. Reviewed code written by myself and my teammates, and identified sections to be redone.
Reviewing the entity relationship diagrams I created, we can see that to get this project back up and running, there are 2 main areas of concern.
1. No longer having access to the previous mongoDB database, I need to get a database of news articles functioning again. 
2. The site was hosted by another student using Render. I need to find a new web host.

In the longer term, as I restore base functionality, I will need to rethink the basic concept for the product. Originally, the idea was to make a tool that would help students exit their news bubbles while gauging interest in current topics. While this worked for the class, the resources we had access to and the time frame we were working under limited the feasibility of the design. Hopefully with some reworking I can make a product that both reflects my own values/designs and even if not intended for profit making, could find use by a wide audience.


# Original Design Document

Deployed Website: https://careordontcare.onrender.com/

# Abstract
The purpose of this document is to provide a comprehensive overview of the software design for the Care or Don’t Care application. This includes the system overview, design considerations, specifications, detailed design, implementation plan, testing plan, and maintenance plan.

## Executive Summary
### Purpose:
Care or Don’t Care is a dynamic website that provides a platform to gauge users interests in trending topics. With the amount of information and misinformation on the internet in our current digital era, information overload is problematic for many individuals. Care or Don’t Care empowers users to judge their personal interests in various article headlines with ease, encouraging them to only engage with what they are interested in. The site is specifically designed for college students at UW as this population group is most responsive to the current floating topics on social media and in the world today. College students lead hectic lives, juggling classes, work, and their demanding social lives. In the midst of balancing this, finding the time for self-education on global topics, especially ones they are interested in, is a never-ending challenge. Additional details can be found in the PRFAQ in Appendix Section E.

### Scope for Initial Launch:
The initial launch of this application will focus on delivering core functionality aimed at providing college students with the experience of gauging and expressing their interests in trending topics. The users we are targeting are college students. Additional details on personas can be found in the User Personas located in Appendix Section D. Care or Don’t Care introduces an intuitive interface where college students can effortlessly swipe to express their interest or disinterest in specific article headlines. Users can create an account using their credentials, ensuring a secure and personalized experience, with the option to revisit their “cared” topics.

### Target Audience:
The target audience is primarily students of UW campus. Within this, there are subgroups like news enthusiasts, who regularly consume news articles and stay updated on current events and trending topics. There are students, who would be studying media, journalism, or communication and would require access to a diverse range of news articles and topics. Finally there is the general audience, who would enjoy discovering new articles and topics aligned with their interests and preferences, regardless of their profession or background. Additional details on personas can be found in the User Personas located in Appendix Section D.

### Goals:
Care or Don’t Care captivates user engagement by fostering activities that actively solicit user input. The website prioritizes user convenience by the feature of revisiting cared topics, thus promoting easy accessibility. Emphasizing scalability and functionality, our platform delivers seamless performance through accommodating multiple users at once. The website allows for cross-compatibility across diverse electronic systems, including Apple and Windows, guaranteeing a consistent and optimal user experience across various devices.

### Monetization:
We plan on initiating a monetization strategy 6 months post our product launch. The first 6 months (Phase 1) will be used to gather user feedback and implement changes accordingly. We hope to reach and then maintain a NPS score of above 6 before carrying out Phase 2. During Phase 2, we plan to partner with various companies to promote advertisements across our website. There will be an option for users to subscribe for an ad free interface by paying a monthly fee of $4.99.

## System Overview
The Care or Don’t Care application is a web-based platform designed to streamline the process of gauging and expressing user interests in trending topics for a personalized user experience. The application will be built using a combination of HTML, CSS, and JavaScript for the frontend and Node.js and MongoDB in the backend. The website will be hosted on Render.

## Design Considerations
### User-friendly interface:
Upon login, users encounter a user-friendly homepage showcasing article headline listed (eg. “Dune 2 Global Box office tops heights”). Under the article headline, they can read a short 1 to 2 sentence blurb describing the article. They then have the option to click Care or Don’t Care. The users’ Cared articles can be revisited on the care page where navigation simplicity is prioritized, allowing users to click on any article of interest for an in-depth exploration. This ensures there is no overload of information. The intention is to strike a balance, facilitating meaningful engagement without subjecting users to information overload. The site is simple and easy to digest through constant font and color across all topics to ensure an unbiased platform. For example, the Care and Don’t Care buttons will both be in the same color, rather than making one green or red.

### Scalability:
Care or Don’t Care’s scalability involves a server network and strategic system optimization to deliver a seamless user experience. Responsiveness is prioritized through aiming for a minimal 2-second delay between user interactions with any button. In the event of server-related issues, downtime is rigorously controlled, ensuring that server crashes are limited to a temporary maximum of 20 minutes. The system is engineered to withstand high user loads, capable of accommodating at least 100,000 concurrent users without compromising performance speed. This scalability strategy guarantees that the platform remains agile and responsive, even during periods of peak demand, ensuring consistent and reliable service for all users.

### Security Measures:
Confidentiality will be achieved through meticulous control over system access. The sign-in process serves as a gatekeeper, ensuring that information remains restricted to authorized users only. There is a strict policy against selling any user data to third parties, safeguarding users’ privacy. A robust encryption system will be integrated which will work against any attempts at data hacking.

### Compatibility:
Users will be able to operate the website both on iOS and Android devices, whether that be laptop, PC, mobile, etc. We will conduct system testing across multiple browsers such as Chrome and Safari to ensure high efficiency in speed. Additionally, we will ensure responsiveness across different devices to ensure that if the screen size expands or shrinks, the website can adjust accordingly.

### Authentication:
By creating an account using their name, email, and password, users are able to save articles utilizing the Care feature. The website will only let users login if their username and password credentials match. If users choose to not make an account, they can engage with the website as a guest, but not be able to save any articles. The library (msal-node-wrapper) we used to set up authentication is transferable, meaning that if someone else wanted to use it, they easily can by changing certain pieces of information (clientId, tenantId, and secret).

### Authorization:
All valid users will be able to view and interact with content, and save content through the Care feature. No users will be able to create any new content or edit the information visible. No users will be able to see the activity of others on Care or Don’t Care. If the user does not have an account, they will only be able to view and interact with the content, but not save content.

### Roles and Permissions:
- Guests: Limited to viewing public content; no access to interactive features or personalization options.
- Registered Users: Able to view, save, and interact with content within the platform; no authority to create or modify information.
- Moderators: Responsible for overseeing and managing user-generated content; empowered to review, edit, or remove content as necessary.
- Administrators: Comprehensive access to system settings, user management, and content control; can modify roles, permissions, and system configurations.

### KPIs Selection:
Strategic KPIs will judge the success of the website in relation to the turnover for the company. Aspects

| Feature                   | Functional Requirements Description                                                                                                                   | Status     | Theme                         | Epic                                |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------|------------------------------------|
| F1: Homepage Topic Selection (Care/Don’t Care - MVP) | **User Story 1:** As a user, I want to see a randomly selected topic displayed on the homepage such that I can determine topics I care and don’t care about. This is validated by the topic changing upon choosing whether I care about it or not. **User Story 2:** As a user, I want to have the option to indicate whether I care or don't care about the displayed topic so that the system can provide articles related to the topic. This is validated by the presence of 'Care' and 'Don't Care' buttons. | Met        | User Interaction             | Topic Selection on Homepage       |
| F2: Bookmarking Favorite Articles  (MLP)            | **User Story 1:** As a user, I want to have the option to bookmark articles for future reference, such that I can easily access them later. This is validated by the presence of a 'bookmarks' page on the website. **User Story 2:** As a user, I want to view my bookmarked articles so that I can quickly access articles that I favor when needed. This is validated by the presence of a 'bookmarks' page. **User Story 3:** As a user, I want to have the option to remove articles from my bookmarked list so that I can manage my saved content. This is validated by the presence of a 'remove from bookmarks' option on the bookmarks page. | Out of Scope | User Favoriting              | Article Bookmarking               |
| F3: Analytics (Visualization Page - MVP)           | **User Story 1:** As a user, I want to have the option to see a visual representation of my preferences based on whether I indicate “Care” or “Don’t Care” on the home page about article topics. This is validated by the presence of a ‘visualization’ page on the website. **User Story 2:** As a user, I want to see a breakdown of my preferences based on different article topics, to understand what subjects I care the most about. This is validated by the presence of the ‘visualization’ page. | Met        | User Analytics               | Personal Insights                 |
| F4: Suggesting possible “Care” Articles  (MLP)     | **User Story 1:** As a user, I want the website to save, store, and analyze my preferences about article topics to understand what topics I care about. This is validated by the presence of a database to store that information. **User Story 2:** As a user, I want to receive tailored content recommendations on the website based on my indicated preferences to see articles that I would enjoy. This is validated by having tailored articles present on the home page. | Met        | User Recommendations        | Article Suggesting                |
| F5: Care Page, MVP                                 | **Story:** As a user I want to view the topics I have said I care about so that I can learn more about them. **Acceptance:** Navigation to Care page, ability to select and view topic cards. **Story:** As a user I want to view the topics I have said I don’t care about so that I can change my mind about them. **Acceptance:** Navigation to Care page, ability to toggle care/don’t care **Story:** As a user I want to see my recent decisions first so that I can easily find a topic I just said I wanted to learn more about. **Acceptance:** Default sorting history by time **Story:** As a user I want to search for topics I have already viewed to easily find a subject I want to learn more about. **Acceptance:** History search functionality | Met        | Deep Dive                    | View Previous Selections          |
| F6: Bias Analysis (MLP)                            | **Story:** As a user, I want a detailed analysis of source bias next to any article I am presented so that I can learn more about topics I am interested in with knowledge of how a source may present the story differently. **Story:** As a non-user stakeholder, I want a detailed analysis of source bias next to any article shown on the app so there is no way the app would face controversy for pushing a perspective. | Out of Scope | Stay Moral                   | Bias Bar                           |

## Detailed Design

### Communication:
For the success of the website application, effective communication within the different system components is important to ensure a smooth user experience. On the home page, users’ actions of clicking “Care or “Don’t Care '' will be communicated to the care page, so that the user’s care preferences about an article topic will be added and users can see the updated care topics when navigating to the care page. In the edge case of a user misclicking “Care” instead of “Don’t Care”, users should be able to make the appropriate changes and see those changes update in real-time. The home page should also be communicating with a database to keep track of the different topics they have said “Care” or “Don’t Care” to, as well as the number of specific articles they have learned more about within that topic. This is where we access the data to create the visualizations of most cared about topics. Effective communication within the different system components is crucial, seeing as how many of our features rely on information from other features.

### Data/Interface/API Contracts:
The data the “Care or Don’t Care” website uses consists of four main entities: user, article, topic, and visualization. Within the data, there are a couple constraints that exist to be aware of during the data handling stage, such as having a unique userId, a unique email, and adhering to any password requirements. The data contract for user authentication specifies the format of different fields, such as making sure email is in the correct format. Similarly, the interface contract defines the methods for the user authentication which is what allows users to actually log in and out of a system. Another example of a data contract that would be used would be having a unique topicid for the different topics that get presented to the user to select between “Care” or “Don’t Care”. Then, the interface contract would be the actual interaction of clicking care, which means we would store that topicId to be associated with a certain userId to show that preference. The team doesn’t anticipate using an existing API. However, since there probably will be a need to store login information, they anticipate the need to create their own API to handle that user login information. The information that this would entail would be the basic information of name, email, and password, where the password is encrypted to ensure it is being stored in a secure manner.

### Database Schema:
The database schema of this application is crucial when providing the structure and organization of storing and managing the data that is being used. The team’s primary objectives in designing the database schema includes scalability to accommodate future growth, efficient query performance, data integrity mechanisms, and ease of maintenance. The team aims to ensure ACID properties are being met: it is of utmost importance that concurrent users can use the application without any issues being encountered. 
The following entity relationship diagram (ERD) encompasses several entities, or tables, and they each are important in storing and managing the relevant information that leads to this application's functionality.

#### User Entity:
Represents individual users of our application, with attributes crucial for user authentication and identification.
- Attributes: userID, name, email, password
- Relationships: one-to-many relationship with the Article entity: Users can be associated with multiple articles based on their topics of interest.

#### Topic Entity:
Represents different topics of interest within our application.
- **Attributes:** TopicID, TopicName
- **Relationships:** one-to-many relationship with the Article entity: Each topic can be associated with multiple articles.

#### Article Entity:
Contains information about the articles present in our application, including their titles, links, and associated images.
- **Attributes:** ArticleID, ArticleName, Link, Image
- **Relationships:** many-to-one relationship with the Topic entity: Each article is linked to a single topic, but multiple articles can belong to the same topic.

#### VisualizationData Entity:
Stores visualization preferences for each user, enabling personalized user experiences.
- **Attributes:** UserID, VisualizationPreferences
- **Relationships:** one-to-one relationship with the User entity: Each user has a corresponding entry in the VisualizationData table.

[ERD.pdf](https://github.com/phariharan818/CareOrDontCare/files/14544366/ERD.pdf)

### Use Case Sequence Diagram:
[Use Sequence Diagram.pdf](https://github.com/phariharan818/CareOrDontCare/files/14544424/Use.Sequence.Diagram.pdf)


### High Level Component Diagram:
[Component Diagram.pdf](https://github.com/phariharan818/CareOrDontCare/files/14544435/Component.Diagram.pdf)

## Non-Functional Requirements

### Performance (MVP):
- **User Story:** As a user, I want the system to respond quickly to my actions such that I can navigate through the application smoothly. This is validated by achieving a response time of under five seconds for all user interactions.
- **User Story:** As a user, I want the system to handle a large number of concurrent users, such that I don't experience slowdowns or errors during peak usage. This is validated by the system being able to support at least 100 concurrent users without performance declining.

### Availability (MVP):
- **User Story:** As a user, I want the system to be available whenever I need it, such that I can access the application without interruption. This is validated by achieving at least 99.9% uptime.
- **User Story:** As a user, I want the system to schedule maintenance windows during off-peak hours, such that I am not inconvenienced by downtime. This is validated by notifying users in advance and scheduling maintenance during low traffic periods.

### Security (MVP):
- **User Story:** As a user, I want the system to encrypt all sensitive data to protect my privacy such that my information remains secure. This is validated by encrypting sensitive user data both at rest and in transit.
- **User Story:** As a user, I want the system to restrict access to sensitive functionalities based on my role, such that unauthorized users cannot access confidential information. This is validated by implementing role-based access control mechanisms.

### Reliability (MLP):
- **User Story:** As a user, I want the system to handle errors gracefully and provide informative error messages such that I can understand and troubleshoot issues easily. This is validated by displaying user-friendly error statements (i.e. login failed, try again) for users to understand the issue.
- **User Story:** As a user, I want the system to perform regular backups of the database, such that my data is protected against loss or corruption. This is validated by implementing automated backup procedures and conducting periodic recovery tests.

### Scalability (MLP):
- **User Story:** As a user, I want the system to scale horizontally to handle an increase in user traffic and data volume, such that I don't experience performance degradation during peak usage. This is validated by designing the system to support scaling.
- **User Story:** As a user, I want the system to distribute incoming requests evenly across multiple servers, such that the workload is balanced and no single server is overloaded. This is validated by implementing load balancing mechanisms.

## Testing Plan

### Operational Worries, Performance and Monitoring:
Managing potential challenges, such as 404 errors and system failures, becomes a priority, particularly when dealing with invalid links embedded in the code within articles. The team’s approach to implement performance and monitoring to ensure the system performs at its best is to leverage tools such as Grafana and Prometheus to gain insights into system performance, resource utilization, and potential bottlenecks. Grafana provides visualization capabilities, allowing the creation of interactive dashboards that display key metrics in real-time. These metrics include CPU usage, memory consumption, request latency, and throughput, enabling the team to identify performance issues promptly. On the other hand, Prometheus will help in storing time-series data from various components of the application. It will continuously scrape metrics endpoints exposed by the services, allowing for the monitoring of the health and performance of the system comprehensively. Integrating Grafana with Prometheus will allow the creation of custom dashboards tailored to the specific monitoring needs of the application and set up alerts to notify the team of any deviations from predefined thresholds.

### Unit Testing:
This is a critical aspect of the software development process as it ensures the correctness and reliability of individual components within this application. The team plans on employing a multitude of unit tests to validate the behavior of each component in isolation, covering functionalities such as data processing, business logic, and user interface interactions. Each component will undergo testing using the Jest framework, which is the most ideal since the application will be built using JavaScript and Node.js. The main priority with these unit tests is to ensure edge cases, boundary conditions, and error scenarios are covered so that users will not encounter problems when using the application.

### Integration Testing:
This is essential for validating the interactions and collaborations between various subsystems within our application. Unlike unit testing, which focuses on individual components in isolation, integration testing evaluates the behavior of interconnected modules when they perform as a whole. This ensures that different parts of the application work seamlessly together, adhering to specified interfaces and contracts. The testing strategy involves testing end-to-end workflows, user journeys, and system interactions across multiple layers of the application stack. The team plans on simulating real-world scenarios and use cases, exercising critical paths and business processes to verify system functionality and behavior. Integration tests may involve interacting with the database and validating data flow between different layers. The usage of Postman for backend testing and the jest-dom library from React for the front end is critical to ensure these parts work well simultaneously. The main goal with integration testing is to help identify defects early, minimize regressions, and deliver a product that meets user expectations.

### User Research:
This is an important tool in the design process for the site, to get user feedback to validate the proposed design approach. Thus, the team’s goal is to have different approaches within user research that highlight how the design performs during the user testing phase. One tool would be to analyze site metrics after the initial launch to understand how users interact with the site. At this stage, insights on user engagement such as seeing how often a user comes back to the site would be a great metric to look at for initial thoughts. Users who keep frequenting the website show a positive reaction to the site, hence they want to keep coming back to continue engaging with the content. Additionally, looking at site clicks to indicate what features a user may like or dislike. For example, if users only interact with the homepage where they are clicking “Care” or “Don’t Care '' on article topics, may give the team the impression that many users do not particularly enjoy the visualization page. So, seeing if don’t frequent a particular page often, based on site clicks could potentially indicate to the team that there isn’t an overwhelmingly positive reaction about that feature, so it may be beneficial to brainstorm improvements for that and iterate on that. These are great ways to get customer feedback, simply by observing user trends. Another method of user research to use would be Eye Movement Tracking. Using an eye-tracking device to monitor users’ eye movements would tell the team about any patterns or different areas on the website that their user group is naturally drawn to. As a result, it would give great insight into the design of the website, specifically what areas they focus their attention on. This information would help validate their design, seeing if there are specific areas users avoid, if the design is distracting, etc. The main priority with their user research is to gain insights about the website to validate the design and continue to improve upon it as needed.

### User Acceptance Testing:
As “Care or Don’t Care” enters public access and the demand for a deeper and better feature pool grows as it transitions into an MLP, ensuring that any new additions or changes made to app functionality are going to be accepted by the user base is critical. Any change needs to show that it will increase the relevant KPIs. Before any feature is taken from the backlog and integrated, a number of steps need to be taken. First, in addition to the user research conducted during the creation of the feature, the completed feature must go through at least 2 focus groups with minimal to no revisions made, and a positive expected performance based on those tests. Second, the feature must be tested on a smaller section of the user base for at least the minimum time required to collect relevant KPIs (2-6 weeks). Before the feature makes it to release, it must show a marked (>= 10%) increase in KPIs for the tested users. In each of these steps, in addition to KPIs, feedback from customers must be collected directly in the form of interviews (for focus groups) and surveys/short feedback forms (for limited releases). This direct feedback is to be compiled with other relevant sources, presented internally, and approved before the next phase of deployment (ie, before rolling out limited user testing, and before full integration).

## Maintenance Plan

Following Agile principles, the maintenance plan being implemented prioritizes iterative updates, bug fixes, and feature enhancements based on user feedback. The team will maintain a backlog of tasks, regularly reviewing and prioritizing them during sprint planning sessions. Bug fixes and small enhancements will be addressed in short iterations, ensuring quick response to user needs and minimizing downtime.

### Bug Fixing Process:
The first step to handle bugs within the system will be to identify the problem through user reports or manual testing on our end. An example of a problem that could be faced is an outdated algorithm in the code that could cause slowdown of the system as a whole. The team will prioritize the bug based on how severe it is (i.e. security vulnerability) as well as the urgency of the problem (i.e. system down due to high concurrency of users). The second step would be to gather the team together and assign roles during sprint planning, allowing the developers to break down the code into sections to simplify the process of identifying the error. The third step will be to fix the error by either identifying the issue through the testing carried out, which allows them to correct the error. Additional tests would be put in place to ensure such a problem doesn’t happen again. The fourth step is to redeploy the application again, ensuring the rest of the code fits perfectly into the changed criteria. Finally, the team would test the code on the website to judge the change in user accessibility and functionality before rolling it into the production environment.

### Feature Enhancement Process:
The website will have built in pop ups that notify users of updates made on the website regarding its UI, thus maintaining user satisfaction. The team also plans on conducting market research to compare existing features in other products similar to ours, which allows a better idea of how to approach the new features that can be implemented. Once this information is gathered, the team would need to break it down into requirements and tasks, which will be created into a backlog. There will be a tracking method within the scrum that keeps a record of updates and their status relative to a list of tasks.

## Conclusion
This software design documentation provides a comprehensive overview of the Care or Don’t application design. It includes the system overview, design considerations, specifications, detailed design, implementation plan, testing plan, and maintenance plan. Any revisions to this document will be recorded below.

