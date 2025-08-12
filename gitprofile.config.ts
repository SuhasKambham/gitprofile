// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SuhasKambham', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['SuhasKambham/mindbloom-emotional-flow'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'NxtWave Day Planner',
          description:
            'NxtWave Day Planner is a task management app that lets users schedule, organize, and track daily activities with simple CRUD functionality and a clean interface.',
          imageUrl:
            'https://drive.google.com/file/d/1WTwIAQwjbFoZnrYBPDz3lx0nf14u1sk2/view?usp=sharing',
          link: 'https://nxt-wave-day-planner.vercel.app/login',
        },
        {
          title: 'FitFuel',
          description:
            'FitFuel is a fitness and meal tracking platform that helps users log workouts, monitor nutrition, and track progress toward their health goals.',
          imageUrl:
            'https://drive.google.com/file/d/175RBBI_s3xnfftCJvPtAvoieDXVpGXDS/view?usp=sharing',
          link: 'https://fit-fuel-lyart.vercel.app/',
        },
      ],
    },
  },
  seo: { title: 'Suhas Kambham', description: '', imageURL: '' },
  social: {
    linkedin: 'kambhamsuhas',
    x: 'SuhasKambham',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: 'kambham-suhas-preetham',
    dribbble: '',
    behance: '',
    medium: 'suhask1400',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '7760722687',
    email: 'suhask1400@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1D72x9VXvNupqW4e2wKEOruuRGGs8ZI-Q/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: {
    technical: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Data Science',
      'Statistical Analysis',
      'Data Augmentation',
      'Data Preprocessing',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Anamoly Detection',
      'Ensemble Learning',
      'Model Selection',
      'Model Building',
      'Hyperparameter Tuning',
      'Model Evaluation',
      'Classification Algorithms',
      'Regression Algorithms',
      'Clustering Algorithms',
      'Regression Algorithms',
      'Neural Networks (CNN, ANN, RNN, LTSM, GAN)',
      'Image Processing',
      'Time Series Forecasting',
      'Node JS',
    ],
    frameworksAndLibraries: [
      'PHP',
      'Laravel',
      'JavaScript',
      'React.js',
      'Node.js',
      'Nest.js',
      'MySQL',
      'PostgreSQL',
      'CSS',
      'Ant Design(Antd)',
      'Tailwind CSS',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Seaborn',
      'Matplotlib',
      'SweetViz',
      'Pandas Profiling',
      'Tensorflow',
      'PHP',
      'Laravel',
      'JavaScript',
      'React.js',
      'Node.js',
      'Nest.js',
      'MySQL',
      'PostgreSQL',
      'CSS',
      'Ant Design(Antd)',
      'Tailwind CSS',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Seaborn',
      'Matplotlib',
      'SweetViz',
      'Pandas Profiling',
      'Tensorflow',
      'Keras',
      'PyTorch',
      'openCV',
    ],
    tools: [
      'Git',
      'Docker',
      'PHPUnit',
      'MCP Servers',
      'CrewAI',
      'Power BI',
      'PLSQL',
      'Excel',
      'Curzor IDE',
      'Visual Studio Code',
      'Spyder',
      'Jupyter Notebook',
      'Spyder',
      'Lovable',
      'N8N',
      'Postman',
    ],
  },
  experiences: [
    {
      company: 'NxtWave Disruptive Technologies',
      position: 'Software Developer Instructor',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://www.ccbp.in/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Power BI Desktop for Business Intelligence',
      body: 'Designed interactive BI dashboards and reports from raw data using advanced data transformation, AI-powered visuals, and industry-grade Power BI techniques.',
      year: 'June 2025',
      link: 'https://drive.google.com/file/d/1QHQB1LwDJw_dl-kJ-u-KsIQe7dWd7dD5/view?usp=sharing',
    },
    {
      name: 'Skillovilla Machine Learning and Data science',
      body: 'Executed full-stack data science workflows involving Python scripting, statistical modeling, hypothesis testing, data mining, and advanced machine learning across structured and unstructured datasets.',
      year: 'October 2024',
      link: 'https://drive.google.com/file/d/1TzNTUQ7TcuRuQkKhuWScQWUT3iw-Ogt5/view?usp=sharing',
    },
    {
      name: 'Data Science A-Z: Hands-On Exercises & ChatGPT',
      body: 'Built end-to-end data science workflows using SQL, regression modeling, Tableau visualizations, CAP analysis, and statistical techniques like VIF and hypothesis testing.',
      year: 'December 2022',
      link: 'https://drive.google.com/file/d/1goBPvM-x1q5c-gfEbB7iU7BzvwsxxCpQ/view?usp=sharing',
    },
    {
      name: 'Machine Learning A-Z: AI, Python & R',
      body: 'Engineered end-to-end ML pipelines in Python & R using algorithms across classification, regression, clustering, NLP, deep learning, and reinforcement learning, with advanced model stacking and dimensionality reduction techniques.',
      year: 'April 2020',
      link: 'https://drive.google.com/file/d/1JmfE4iki6OqK1_pLAsYaDic9GVZlWxSR/view?usp=sharing',
    },
    {
      name: 'Deep Learning A-Z: Neural Networks, AI',
      body: 'Engineered deep learning solutions by applying neural architectures like CNNs, RNNs, SOMs, Boltzmann Machines, and Autoencoders with a focus on conceptual clarity and real-world deployment.',
      year: 'May 2020',
      link: 'https://drive.google.com/file/d/1DMM5lDCxxqcSzohmm6Ivbh598uMXVY_s/view?usp=sharing',
    },
    {
      name: 'Deep Learning A-Z: Neural Networks, AI',
      body: 'Completed Deep Learning A-Z, gaining practical intuition and hands-on experience with cutting-edge architectures like CNNs, RNNs, SOMs, and Autoencoders.',
      year: 'May 2020',
      link: 'https://drive.google.com/file/d/1DMM5lDCxxqcSzohmm6Ivbh598uMXVY_s/view?usp=sharing',
    },
    {
      name: 'Machine Learning - Stanford University',
      body: 'Engineered and optimized core machine learning models leveraging convex optimization, gradient descent variants, kernel methods, and regularization frameworks for robust predictive performance.',
      year: 'October 2019',
      link: 'https://coursera.org/share/dd7533b51ac8ede8d77ff11e33ffee9d',
    },
  ],
  educations: [
    {
      institution: 'M.Tech - Computer Science and Engineering',
      degree: 'Amrita Vishwa Vidyapeetham',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'B.Tech - Computer Science and Engineering',
      degree: 'SRM University',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title:
        'Deep Learning Based Image Fusion Applied on Landsat-8 Archival Data Using UVCGAN',
      conferenceName:
        '4th International Conference on Innovations in Power and Advanced Computing Technologies, i-PACT-2023',
      journalName: '',
      authors: 'Suhas Kambham, D Bharathi',
      link: 'https://ieeexplore.ieee.org/abstract/document/10434448',
      description:
        'Image fusion is required to maximise the utilisation of the different satellite sensors and enhance the usage and quality of the images obtained from them. One can get over obstacles like varied geographical resolutions, spectral bands, and temporal coverage by fusing images from multiple satellites, such as Landsat 8 and Sentinel 2. For various applications that involve observation of the Earth like land cover classification, monitoring of vegetation, disaster monitoring, and urban planning, the fusion process aims to produce composite images that integrate the spectral richness, spatial detail, and temporal frequency of the input images. The creation of Sentinel-like imagery from Landsat8 data enhances its potential for Earth observation applications, making the problem of Landsat 8 and Sentinel 2 imagery fusion very important to solve. A deep learning methodology is required to solve this problem because of its capacity to discover complex correlations and patterns within the data. In this paper, a U-Net Vision Transformer Cycle-consistent Generative Adversarial Network (UVCGAN) - based image fusion method that effectively transforms Landsat 8 images into Sentinel-like imagery is pro- posed. The results obtained from the experiments illustrate the efficiency and effectiveness of the proposed method in generating high-quality composite images with improved spectral and spatial characteristics.',
    },
    {
      title:
        'Voice assistance to blind people by detection of surrounding objects, activities, and humans',
      conferenceName:
        '2024 International Conference on Computing and Intelligent Reality Technologies (ICCIRT)',
      journalName: '',
      authors: 'Suhas Kambham, MK Eniyan',
      link: 'https://ieeexplore.ieee.org/document/10921776',
      description:
        'Various systems were developed to assist those with vision impairments and enhance their standard of life. Regrettably, the majority of these systems have restricted functionality. We decided to build a model that detects all possible surrounding things and guides them through voice description. Our main objective is to detect the obstacles in the person’s pathway and warn them using voice description. The model can assist blind people from the surrounding obstacles which exist in their pathway. The primary goal of the model is to identify the nearby obstacles - vehicles, animals, persons, objects, etc, in the person’s pathway and guide or warn them using voice description. Our proposed system integrates advanced real-time obstacle detection and voice-guided navigation using a novel combination of DepthNet module with convolutional LSTM layers, enhancing spatial context awareness compared to traditional models. This approach, along with fine-tuning on diverse datasets such as MS COCO and BDD100K, ensures robust performance in varied environments and conditions. The real-time guidance capability is further improved by the integration of optical flow algorithms, which accurately estimate motion in dynamic scenes. This comprehensive solution significantly enhances the assistive technology for those with visual impairments.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    
  // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
