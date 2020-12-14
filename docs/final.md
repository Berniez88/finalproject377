# Schedule of Planet Terps

### Contributors:
- Josh Hershberger
- Jennifer Saratis
- Arthur Wu
- Ian Zheng
- Bernie Zhong

**Link to website:** 
> https://scheduleofpt.herokuapp.com/

### Information Problem:

When scheduling classes, an information problem that UMD students come across is the inconvenience of having multiple laggy tabs open and forgetting which ones were actually needed. Since many students highly contemplate which courses to take and which instructors to take it with, the information problem we tried to resolve was this inconvenience, combining common information that students look into before scheduling all on one site. As course registration occurs at a time in which everyone is worried about their exams and projects, our aim was to alleviate some of the stresses during this time by making a website to make their decision making easier and more convenient. Stakeholders of this website would include current and prospective students from the University of Maryland. 

### Data Worked With:

**Links to API's**

- https://api.planetterp.com/#planetterp-api
- https://umd.io/

Our final project consists of two APIs. One from PlanetTerp and the other is umd.io which consists of an open-source API using UMD data. These two data sets are essential for solving our information problem which is helping students register for classes. These two APIs contain information regarding UMD courses, sections, grade distribution, student reviews, and much more that can all be used to help students determine if a certain course/professor is the right fit for them. The goal is to pull the data from both our APIs and combine them into a webpage and minimize the amount of tabs/work students need to do in order to find information regarding the course and professor they are trying to schedule. 

### Chosen Strategies and Solutions:

One major issue UMD students face when scheduling courses is the lack of information that Testudo has to offer. The website itself only tells us what courses are open and what professors are teaching them. We wanted to solve this issue by condensing what we think is crucial which is why we used PlanetTerp and UMD.io. We included student reviews along with having an average GPA calculator to allow students to get a general idea of how difficult a course maybe. This way students will be able to get a varied amount of opinions from previous/current students. Another factor that we considered was GPA since some core courses require a C or higher students making students more inclined to register for a professor that has a high average grade. The greatest way to approach the issue was to make everything in our Schedule search tab to allow students to navigate between courses and professor reviews with only a few clicks.

### Technical System Decision Rationale:

In order to make technical system decisions as a team, we were able to split up the work amongst team members by programming language. We had two members working on JS and three members working on HTML/CSS. Programming languages were selected by team members based on experience and proficiency in the language. 
	
In order to collaborate on this web application through a virtual setting, a GitHub repository was set up with the team members as its collaborators, and meetings through Zoom allowed for communication. Two breakout rooms were formed (one for JS, one for HTML/CSS), so we could work together in our respective programming language groups.

### How Schedule of Planet Terps Helps:

Schedule of Planet Terps is a single web application that offers information from multiple different online sources. The simplicity of having course listings (section, professor, description, etc.), average course GPA, and professor reviews all in one place helps UMD students create the best course schedules. It creates more convenience and awareness for all the types of information registering students can consult.

### Challenges Faced and Impact on Final Design:

The main challenge during the construction of this web application was navigating around the two API’s selected (UMD.io and Planet Terp). There were challenges surrounding the navigation of the API’s because we were unsure what we were able to do and not do. Specifically, we were having issues getting average ratings for professors through the Planet Terp API. This impacted the final design on content as we focused on individual reviews and ratings rather than overall. The layout became simpler as a result of only professor reviews being presented through card boxes.

### Possible Future Work Directions with This Problem:

In terms of potential future work, there are a few things we would like to incorporate. The first thing would be the addition of class times that the user could view and build their schedule off of. Continuing off of this, the second thing we would like to add is a calendar that users can input course sections into so they can visualize their daily schedule. Third, we can implement a grade distribution graph, along with adding an average rating out of 5 stars for each professor. These methods will give students more visualizations and ways to help register for classes.

