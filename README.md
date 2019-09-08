# UBC Wiki

Proof of concept wiki website for UBC that gives students key information about courses so they can make confident decisions on the courses that they sign up for.

The wiki features course tags for at-a-glance key information, links to past exams and associated resources, an overall course rating and difficulty score, student course opinion, and list of professors and their ratings.

Built by Andrew Tong and [Linus Hung](https://github.com/linusHche)

#### Landing Page
![Landing Page](https://i.imgur.com/bzHrOHF.png)

#### Course Page
![Course Page](https://i.imgur.com/x35kDvG.png)

### Dependencies
The UBC course wiki is built on and requires the following to function:
- ReactJS - for hosting the webpage (and the following React dependencies)
    - Bootstrap
    - Circular Progressbar
- stdlib - API endpoint to get course information from

### How It Works
1. The user makes a query on the landing page to select information for a course.
2. A call is made to our API endpoint hosted on stdlib to acquire the course-specific information.
3. The page uses routing to load a new page with the queried information rendered into the appropriate places.
