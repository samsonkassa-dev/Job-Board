# Frontend Mentor - Job listings with filtering

![Design preview for the Job listings with filtering coding challenge](./design/desktop-preview.jpg)
## The challenge

User requirements for this challenge:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories
## Building the project

The project is built using the following:
1. NextJS / React
2. [Tailwind CSS](https://tailwindcss.com/)
3. Typescript

[Code](https://github.com/francisldn/fm-job-listing)

[Frontend](https://fm-job-listing.vercel.app/)
## What I have learnt
#### NextJS framework
* This is my first time using NextJS so I spent some time initially to learn about the details of the framework. One useful thing I learnt was how to create the ``Layout`` component for NavBar and nest the ``pageProps`` within the ``Layout`` component.
* The main challenge in NextJS for me is how to use various data fetching components such as ``getStaticProps``, ``getServerSideProps`` and ``getStaticPaths`` which I don't get to use in this project but hopefully I will for the next project.
* I find that ``<Image>`` which is the native NextJS img component is not very easy nor flexible to use, so I have resorted to using ``<img>`` which offers more flexibility in terms of CSS styling.
#### Tailwind CSS
* This is my first time using Tailwind CSS and I really love it - for the ease of use, flexibility and responsiveness. As this is my first time using Tailwind, I also spent some time to familiarize myself with the various utilities offered by Tailwind. There was an initial learning curve in knowing the various class names that are available but it is relatively easy to pick up. 
* It is also convenient to create re-usable CSS classes in Tailwind in the normal CSS file
* To define custom colors, fonts or other settings, it is possible to do so in ``tailwind.config.js``
* Specifying the layout and styling for various screen-sizes is really easy with Tailwind without having to write media queries, which saves a lot of time
#### Typescript
* I find that using Typescript instead of JS has slowed down my development time significantly due to the need to resolve Typescript errors.
* To resolve ``MouseEvent`` type error, one can cast the ``event.target`` as an ``Element`` or ``HTMLElement``.
#### Search function
* To implement the incremental search function, I discovered ``Array.includes`` function which makes it really easy to filter with multiple strings. 
Example of the code as below:
```
for(let i=0; i<newList.length; i++) {
      newFilterData = newFilterData.filter(({tags}) => tags.includes(newList[i]))
    }
```
