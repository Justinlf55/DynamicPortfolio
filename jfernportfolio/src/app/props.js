export const skillsData = [
    {
      path: '/JS.png',
      label: 'JavaScript',
      category: ['Languages', 'Frontend'],
    },
    {
      path: '/React.png',
      label: 'React.JS',
      category: ['Frontend', 'Frameworks'],
    },
    {
      path: '/ts.png',
      label: 'TypeScript',
      category: ['Languages', 'Frontend'],
    },
    {
      path: '/next.png',
      label: 'Next.js',
      category: ['Frontend', 'Frameworks'],
    },
    {
      path: '/tailwind.png',
      label: 'TailwindCSS',
      category: ['Frontend', 'Frameworks'],
    },
    {
      path: '/ruby.png',
      label: 'Ruby',
      category: ['Languages', 'Backend'],
    },
    {
      path: '/rails.png',
      label: 'Ruby on Rails',
      category: ['Backend', 'Frameworks'],
    },
    {
      path: '/py.png',
      label: 'Python',
      category: ['Languages', 'Backend'],
    },
    {
      path: '/dj.png',
      label: 'Django',
      category: ['Backend', 'Frameworks'],
    },
    {
      path: '/aws.png',
      label: 'AWS',
      category: ['Miscellaneous'],
    },
    {
      path: '/node.png',
      label: 'Node.js',
      category: ['Backend', 'Frameworks'],
    },
    {
      path: '/express.png',
      label: 'Express.js',
      category: ['Backend', 'Frameworks'],
    },
    {
      path: '/postgres.png',
      label: 'PostgreSQL',
      category: ['Backend', 'Miscellaneous'],
    },
    {
      path: '/mongo.png',
      label: 'MongoDB',
      category: ['Backend', 'Miscellaneous'],
    },
  ];
  

export const projectsData = [
    {   
        id: 1,
        name: 'Newflix',
        gifPath: '/newflix.gif',
        tnPath: '/newflix.png',
        overview: 'Newflix is a Netflix clone purposed to enhance my skills in full-stack development. This project includes features for users to watch and stream movie trailers after registering and signing in.',
        stack: {
            'Frontend': 'The frontend was developed using React.js to build a responsive and dynamic user interface, ensuring a seamless viewing experience. Redux was implemented for state management, allowing consistent data flow across all components. The client-side logic and interactions were handled with modern JavaScript (ES6+).',
            'Backend': 'The backend was powered by Ruby on Rails, which managed the server-side logic, API endpoints, and business logic. For data storage, PostgreSQL was used as the relational database, effectively storing user information, movie data, and streaming history.',
            'Other': 'Amazon AWS S3 was utilized for cloud storage, enabling efficient handling of images and videos, which supported seamless streaming and media management. Additional server-side scripting was handled by Node.js as needed. Webpack and Babel were used for bundling and transpiling modern JavaScript code. Version control and collaborative development were facilitated through Git and GitHub.'
        },
        features: {
            'Real-Time Multiplayer': 'Integration of WebSockets allows for seamless real-time gameplay between two players, ensuring low-latency interactions.',
            'Classic Horror Theme': 'Game design inspired by iconic horror movie characters, providing a nostalgic and thrilling experience for players.',
            'Asynchronous Data Handling': 'Axios and JavaScript promises manage the flow of data from MongoDB to the frontend, ensuring that game states are updated in real time.',
            'State Management with Redux': 'Efficient handling of game states and player actions, ensuring that UI/UX is responsive and intuitive.',
            'Express.js Backend': 'The server handles game logic, player authentication, and communication between clients, ensuring a smooth and reliable gaming experience.',
            'MongoDB Database': 'The database stores player data, game states, and other essential information, providing a scalable solution for the game’s backend.',
        },
    },
    {
        id: 2,
        name: 'Monster Mayhem',
        gifPath: '/mayhem.gif',
        tnPath: '/mayhem.png',
        overview: 'An online multiplayer battle arena game inspired by classic horror movie characters, developed collaboratively with three other full-stack engineers. The backend is built with Express.js and MongoDB, providing a robust database solution. As the frontend lead, I utilized Axios and JavaScript promises to fetch data from MongoDB, while employing Redux to efficiently manage state across React components, enhancing the UI/UX and game logic. WebSocket integration was implemented to enable real-time online gameplay between two players by creating temporary servers.',
        stack: {
            'Frontend': 'React.js was pivotal in creating an interactive and engaging user interface. As the frontend lead, I utilized Axios to efficiently handle HTTP requests, fetching game data from the backend. JavaScript promises were implemented to manage asynchronous operations, ensuring smooth data retrieval. Redux was employed for state management, passing crucial information into React components to enhance the overall UI/UX and streamline game logic.',
            'Backend': 'The backend of the game was developed using Express.js, which provided a robust server-side framework for handling game logic, player interactions, and real-time updates. MongoDB was chosen as the database due to its flexibility and scalability, storing player data, game states, and other dynamic content efficiently.',
            'Other': 'WebSockets were integrated to enable real-time communication between players, allowing the creation of temporary servers for online matches. This setup facilitated a seamless multiplayer experience, enabling two players to engage in battles within the game environment. The combination of these technologies ensured a smooth, real-time multiplayer experience.',
        },
        features: {
            'Real-Time Multiplayer': 'Integration of WebSockets allows for seamless real-time gameplay between two players, ensuring low-latency interactions.',
            'Classic Horror Theme': 'Game design inspired by iconic horror movie characters, providing a nostalgic and thrilling experience for players.',
            'Asynchronous Data Handling': 'Axios and JavaScript promises manage the flow of data from MongoDB to the frontend, ensuring that game states are updated in real time.',
            'State Management with Redux': 'Efficient handling of game states and player actions, ensuring that UI/UX is responsive and intuitive.',
            'Express.js Backend': 'The server handles game logic, player authentication, and communication between clients, ensuring a smooth and reliable gaming experience.',
            'MongoDB Database': 'The database stores player data, game states, and other essential information, providing a scalable solution for the game’s backend.',
        },
    },
    {
        id: 3,
        name: 'Interdimensional Sniper',
        gifPath: '/interdimensional.gif',
        tnPath: '/interdimensional.png',
        overview: 'Newflix is a Netflix clone purposed to enhance my skills in full-stack development. This project includes features for users to watch and stream movie trailers after registering and signing in.',
        stack: {
            '': ''
        },
        features: {
            'Real-Time Multiplayer': 'Integration of WebSockets allows for seamless real-time gameplay between two players, ensuring low-latency interactions.',
            'Classic Horror Theme': 'Game design inspired by iconic horror movie characters, providing a nostalgic and thrilling experience for players.',
            'Asynchronous Data Handling': 'Axios and JavaScript promises manage the flow of data from MongoDB to the frontend, ensuring that game states are updated in real time.',
            'State Management with Redux': 'Efficient handling of game states and player actions, ensuring that UI/UX is responsive and intuitive.',
            'Express.js Backend': 'The server handles game logic, player authentication, and communication between clients, ensuring a smooth and reliable gaming experience.',
            'MongoDB Database': 'The database stores player data, game states, and other essential information, providing a scalable solution for the game’s backend.',
        },
    },
    {
        id: 4,
        name: 'Dynamic Portfolio',
        gifPath: '/portfolio.gif',
        tnPath: '/portfolio.png',
        overview: 'Newflix is a Netflix clone purposed to enhance my skills in full-stack development. This project includes features for users to watch and stream movie trailers after registering and signing in.',
        stack: {
            '': ''
        },
        features: {
            'Real-Time Multiplayer': 'Integration of WebSockets allows for seamless real-time gameplay between two players, ensuring low-latency interactions.',
            'Classic Horror Theme': 'Game design inspired by iconic horror movie characters, providing a nostalgic and thrilling experience for players.',
            'Asynchronous Data Handling': 'Axios and JavaScript promises manage the flow of data from MongoDB to the frontend, ensuring that game states are updated in real time.',
            'State Management with Redux': 'Efficient handling of game states and player actions, ensuring that UI/UX is responsive and intuitive.',
            'Express.js Backend': 'The server handles game logic, player authentication, and communication between clients, ensuring a smooth and reliable gaming experience.',
            'MongoDB Database': 'The database stores player data, game states, and other essential information, providing a scalable solution for the game’s backend.',
        },
    },
];

export const timelineData = [
    {
        date: '[ Oct 2019 - Mar 2020 ]',
        title: 'App Academy',
        companyDescription: 'Immersive software development course focused on full stack web development',
        jobDescription: {
            summary: '',
            description: [],
        },
        role: 'Software Engineering Student',
        location: 'San Francisco, CA',
    },
    {
        date: '[ Jul 2020 -  Feb 2021 ]',
        title: 'Tonight',
        companyDescription: 'Application designed to keep nights out fresh and unique by connecting with local places and events',
        jobDescription: {
            summary: 'Full stack engineer heavily responsible for solving complex frontend web and mobile initiatives',
            description: [
                'Build RESTful APIs (NodeJS) that served data to frontend modules from database (MongoDB) based on specified requests from user inputs',
                'Developed front-end modules for web (ReactJS) and mobile application (Swift) geared to creating a pleasant experience for the user',
                'Led front-end team, hosting stand-up discussions on front-end concepts and UI/UX design ideas for the application',

            ],
        },
        role: 'Fullstack Software Engineer',
        location: 'San Francisco, CA',
    },
    {
        date: '[ May 2021 - Mar 2023 ]',
        title: 'Upstart Inc.',
        companyDescription: 'AI lending platform that partners with banks and credit unions to provide consumer loans using non-traditional variables',
        jobDescription: {
            summary: 'Responsible for full stack development of the personal loan experience, continuously building and improving features and functionality from loan applications to rate selection, aimed to allow customers to easily interact with the business and its multiple products.',
            description: [
                'Worked in an agile environments to build complex, full stack interfaces based on product team designs and requirements that are used by over a million users to date',
                'Led engineering on initiative and collaborated closely with a product team to allow users customizable loans, resulting in a 10% increase in customer conversion',
                'Diligently monitored site health metrics (DataDog, SumoLogic, BugSnag), diagnosing and finally debugging production issues, resulting in minimizing production incidents to under 8%',
                'Supported a number of larger scale initiatives by building and integrating backend (Ruby on Rails) and frontend pieces (ReactJS, TypeScript), bringing new products and features to production',
                'Carefully tested code (RSpec, Jest, Selenium, Playwright) to prevent degradation of code and bugs, allowing for 100% code coverage and a sustainable, flexible codebase',
                'Converted multiple portions of the application to render server side through NextJS, improving page performance to over 90%',
            ],
        },
        role: 'Software Engineer',
        location: 'San Mateo, CA',
    },
];
