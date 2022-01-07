export const pinnedRepos = [
    {
        id: `humayonzafar.com`,
        stack: ['Next', 'Chakra-UI'],
        name: `Portfolio Site`,
        deployedLink: 'https://humayonzafar.com',
        image: 'https://res.cloudinary.com/humayoncloud/image/upload/v1641409691/Portfolio/humayonzafar_gz3wix.png',
        longDescription: `Personal website to showcase my skills, projects and to share my resume.`,
        html_url: 'https://github.com/humayonzafar/portfolio'
    },
    {
        name: 'HZ Movies',
        stack: ['React', 'Rest'],
        id: 'HzMovies',
        deployedLink: 'https://hzmovies-react.netlify.app/',
        html_url: 'https://github.com/humayonzafar/react-rms',
        image: 'https://res.cloudinary.com/humayoncloud/image/upload/v1641410766/Portfolio/hzmovies2_qrgnhi.png',
        longDescription: 'A movie management system built with React for learning purpose. It utilizes the Movie Db Api to fetch the latest movies. The functionality includes listing movies with a breif description with pagination, searching movies as well listing the cast with pictures with the running time, budget and revenue if available. '
    },
    {
        id: `devconnector`,
        name: `DevConnector`,
        stack: ['Express','React', 'MongoDB'],
        image: 'https://res.cloudinary.com/humayoncloud/image/upload/v1641410769/Portfolio/dev_connector_home_sggwei.png',
        longDescription: `DevConnector is a developer-focused social platform that allows users to communicate with their peers and showcase their developer credentials.  Users can create profiles (with detailed information on their technical skills, educational and work experience, and the user’s most recent GitHub repositories), view a list of all developers on the platform, and create posts that can be liked/unliked and commented on by other users. The Node.js/Express.js server features over 20 endpoints that handle authenticating users, Create/Read/Update/Delete operations for user validation (using the passport.js JSON Web Token strategy), profile and post data, and extensive input validation and error handling.`,
        deployedLink: 'https://dev-connector-786.herokuapp.com/',
        html_url: 'https://github.com/humayonzafar/dev_connector'
    }
];
