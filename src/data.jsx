import {
    FaCode, FaFacebookSquare, FaGithubSquare
    , FaLinkedin, FaServer, FaPhoneAlt, FaMapMarkerAlt, FaLaptopCode, FaHome,
    FaBook, FaTv
    , FaCar, FaDownload, FaSun, FaMoon, FaPaintBrush, FaMusic,
    FaUniversity, FaBriefcase, FaThLarge, FaRegUser, FaRegFileCode, FaEnvelope, FaHiking
    , FaHeadphonesAlt
} from 'react-icons/fa';
import React from 'react';


export const menu = [

    {
        id: 1,
        title: 'Home',
        url: '#',
        icon: <FaHome />
    }, {
        id: 2,
        title: 'Profile',
        url: '#profile',
        icon: <FaRegUser />
    }, {
        id: 3,
        title: 'Education',
        url: '#education',
        icon: <FaUniversity />
    },  {
        id: 4,
        title: 'Skills',
        url: '#skills',
        icon: <FaRegFileCode />
    }, {
        id: 5,
        title: 'Projects',
        url: '#projects',
        icon: <FaEnvelope />
    }

]

export const data = [
    {
        id: 1,
        icon: <FaBook />,
        hobby: 'Reading'
    },
    {
        id: 2,
        icon: <FaPaintBrush />,
        hobby: 'Painting'
    }, {
        id: 3,
        icon: <FaTv />,
        hobby: 'Movies'
    },{
        id: 4,
        icon: <FaHeadphonesAlt />,
        hobby: 'Music'
    }, 
]





export const collegeinfo = [
    {
        id: 1,
        course: 'BACHELOR OF ENGINEERING',
        college: 'NAGPUR UNIVERSITY',
        year: '2015-2019'
    },
    {
        id: 2,
        course: 'HSC',
        college: 'PUNE BOARD',
        year: '2014-2015'
    },
    {
        id: 3,
        course: 'SSC',
        college: 'PUNE BOARD',
        year: '2013'
    }
]

// export const work = [
//     {
//         id: 1,
//         designation: 'SERVICE DELIVERY EXECUTIVE',
//         company: 'NEEYAMO ENTERPRISE',
//         year: 'JUL 2018 - JAN 2020',
//         jobDesc: [
//             'Neeyamo, a leading provider of HR technology, HR operations, and HR process consulting services.Reviewing and checking applications and supporting documents.Maintaining complete activity log and Preparing reports.',
//             'Responding to mails coming from other teams. Initiate Background verification checks according to client requirements and attach all documents according to checks and push it to the next level'
//         ]
//     },
//     {
//         id: 2,
//         designation: 'ELECTRICAL SUPERVISOR',
//         company: 'SANJAY UMAP NETERPRISES',
//         year: 'JUL 2014 - JAN 2016',
//         jobDesc: [
//             'MIDC water treatment plant is the main source of pure water for all the companies comes under Butibori MIDC.',
//             'Supervise and coordinate activities of workers engaged in operating and maintaining equipment in water treatment plant.',
//             'Plan a daily work schedule and assign tasks to workers based upon the priority of work expertise of individual workers. Improving the operations of all the phases of production , quality and maintenance'
//         ]
//     },

// ]

export const skills = [
    {
        id: 1,
        icon: <FaCode />,
        techology: 'FRONTEND development',
        techno: [
            {
                id: 11,
                lang: 'html',
                perc: '90%'
            },
            {
                id: 12,
                lang: 'css',
                perc: '75%'
            },
            {
                id: 13,
                lang: 'javascript',
                perc: '70%'
            },
            {
                id: 14,
                lang: 'react js',
                perc: '70%'
            },
            {
                id: 15,
                lang: 'bootstrap',
                perc: '70%'
            }
        ]

    }, {
        id: 2,
        icon: <FaServer />,
        techology: 'backend development',
        techno: [
            {
                id: 16,
                lang: 'python',
                perc: '80%'
            }
        ]
    }, {
        id: 3,
        icon: <FaLaptopCode />,
        techology: 'Other',
        techno: [
            {
                id: 17,
                lang: 'git/github',
                perc: '60%'
            },
            {
                id: 18,
                lang: 'sql',
                perc: '55%'
            }
        ]

    }
]




export const projects = [

    {
        id: 1,
        title: "BULB ON/OFF",
        img: "images/kari-shea-1SAnrIxw5OY-unsplash.jpg",
        link: "https://warghane-monali.github.io/Bulb-ON-OFF/"
    }, {
        id: 2,
        title: "AWESOME JOKES",
        img: "images/smile-g3cf5a94a0_640.jpg",
        link: "https://warghane-monali.github.io/Awesome-Jokes/"
    }, {
        id: 3,
        title: "DELICIOUS PANI-PURI",
        img: "images/panipuri-transformed.jpeg",
        link: "https://warghane-monali.github.io/pani-puri/"
    }, {
        id: 4,
        title: "ToDo_list",
        img: "images/todo-lists-ga8129914c_640.jpg",
        link: "https://list-apps.herokuapp.com/"
    }, {
        id: 5,
        title: "Netflix App",
        img: "images/netflix-gd0ccd3cd6_1920.jpg",
        link: "https://react-netflix-application.herokuapp.com/"
    }, {
        id: 6,
        title: "Greeting Website",
        img: "images/tulips-g9e53788f9_1280.jpg",
        link: "https://react-greeting-app.herokuapp.com/"
    }


]
