# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Description

_**Project Title** chat-spot.

<br>

### Wireframes


![Project two wireFrame](https://user-images.githubusercontent.com/89764557/134079336-834c468f-350f-41bd-8d89-328362e3574a.png)

![Project two hierarchy](https://user-images.githubusercontent.com/89764557/134079359-a575a8e6-c10d-4085-9642-482fbcc094db.jpeg)


### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** This project should allow client to view content, click to display content, add a comment to content, like or dislike content and post content._

<br>

#### MVP Goals

- _Post content
- _Comment content
- _display content
- _use experience


<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| ny times API |      yes      | _example.com_ |  https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${health}&api-key=zEQ1gCv8jrqPXKuMqbtEpLJxY3fSJNz6 |

Sample Query Results:

```json
  {
  "status": "OK",
  "copyright": "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
  "response": {
    "docs": [
      {
        "abstract": "While the Inspiration4 crew was only in orbit for three days, doctors will performing screenings to make sure they are well.",
        "web_url": "https://www.nytimes.com/2021/09/18/science/egress-health-check-spacex.html",
        "snippet": "While the Inspiration4 crew was only in orbit for three days, doctors will performing screenings to make sure they are well.",
        "lead_paragraph": "When astronauts return to Earth from space, they can experience a number of health and physical issues after they land — a result of living without gravity.",
        "source": "The New York Times",
        "multimedia": [
          {
            "rank": 0,
            "subtype": "xlarge",
            "caption": null,
            "credit": null,
            "type": "image",
            "url": "images/2021/09/18/science/18inspiration-check/merlin_194940120_df6e7cbe-f753-4238-bb06-6634a01388e6-articleLarge.jpg",
            "height": 167,
            "width": 600,
            "legacy": {
              "xlarge": "images/2021/09/18/science/18inspiration-check/merlin_194940120_df6e7cbe-f753-4238-bb06-6634a01388e6-articleLarge.jpg",
              "xlargewidth": 600,
              "xlargeheight": 167
            },
            "subType": "xlarge",
            "crop_name": "articleLarge"
          },
          {
            "rank": 0,
            "subtype": "popup",
            "caption": null,
            "credit": null,
            "type": "image",
            "url": "images/2021/09/18/science/18inspiration-check/merlin_194940120_df6e7cbe-f753-4238-bb06-6634a01388e6-popup.jpg",
            "height": 181,
            "width": 650,
            "legacy": {},
            "subType": "popup",
            "crop_name": "popup"
          },

```

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _React framwork for my client._ |
| React Router | _Router to different components._ |
| axios | _using axios to make Api call, and call to endpoints._ |
| icons | _import Material -icons for visual display ._ |


<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ App/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ BlogPage.jsx
      |__ Form.jsx
      |__ CommentBox.jsx
      |__ Advice.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _make Api call and display content. route to other component pages_ |
|  Navigation  | functional |   n   |   n   |   n   | _nav through menu._ |
|     Form     | functional |   y   |   n   |   y   | _client will write text inside input form ._ |
|  CommentBox  | functional |   y   |   n   |   y   | _Client will write comment inside comment box._ |
|    BlogPage  | functional |   y   |   y   |   y   | _will display gallary card with select content to view._ |
|    Footer    | functional |   n   |   n   |   n   | _social media, email, etc._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Api call         |    H     |     2 hrs      |      hrs     |     hrs    |
| build components |    H     |     3 hrs      |      hrs     |     TBD     |
| Add blog form    |    H     |     2 hrs      |      hrs     |     TBD     |
| axios calls (put, push, get, delete      |    H     |     4 hrs      |      hrs     |     TBD     |
| Add css          |    L     |     3 hrs      |      hrs     |     TBD     |
| TOTAL            |          |      |     hrs     |     TBD     |

<br>

### Post-MVP

> User should be able to comment and edit their comment and create and edit blog form

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.