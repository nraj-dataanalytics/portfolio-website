// ==========================================
// DATA MANAGEMENT
// ==========================================

// Portfolio Projects Data
const portfolioData = [
    {
        id: 1,
        title: "Retail Demand Forecasting System",
        category: "machine-learning",
        description: "Built a predictive model achieving 95% accuracy in forecasting retail demand using ARIMA and XGBoost algorithms.",
        tags: ["Python", "XGBoost", "ARIMA", "Pandas"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 2,
        title: "Customer Segmentation Dashboard",
        category: "dashboards",
        description: "Interactive Tableau dashboard for customer segmentation using RFM analysis and K-means clustering.",
        tags: ["Tableau", "Python", "K-means", "SQL"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 3,
        title: "Supply Chain Analytics Platform",
        category: "cloud",
        description: "Cloud-based analytics platform on AWS for real-time supply chain monitoring and optimization.",
        tags: ["AWS", "Python", "PostgreSQL", "Docker"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 4,
        title: "Sales Performance Dashboard",
        category: "dashboards",
        description: "Power BI dashboard tracking KPIs, sales trends, and regional performance with automated data refresh.",
        tags: ["Power BI", "DAX", "SQL Server", "ETL"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 5,
        title: "Sentiment Analysis Engine",
        category: "machine-learning",
        description: "NLP-based sentiment analysis tool for customer reviews using BERT and transformer models.",
        tags: ["Python", "NLP", "BERT", "TensorFlow"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 6,
        title: "Data Warehouse Optimization",
        category: "sql",
        description: "Optimized data warehouse queries reducing processing time by 70% through indexing and query restructuring.",
        tags: ["SQL", "PostgreSQL", "Query Optimization", "ETL"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 7,
        title: "Churn Prediction Model",
        category: "machine-learning",
        description: "Machine learning model predicting customer churn with 88% accuracy using ensemble methods.",
        tags: ["Python", "Random Forest", "scikit-learn", "Feature Engineering"],
        image: "",
        github: null,
        demo: null
    },
    {
        id: 8,
        title: "Real-time Analytics Pipeline",
        category: "cloud",
        description: "Implemented streaming data pipeline on Azure using Event Hubs and Databricks for real-time analytics.",
        tags: ["Azure", "Databricks", "Spark", "Python"],
        image: "",
        github: null,
        demo: null
    }
];

// Blog Posts Data
const blogData = [
    {
        id: 1,
        title: "The Future of Predictive Analytics in Retail",
        date: "2024-12-15",
        readingTime: "8 min",
        categories: ["Predictive Analytics", "Retail"],
        excerpt: "Exploring how predictive analytics is transforming demand forecasting, inventory management, and decision-making in modern retail businesses.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        slug: "future-predictive-analytics-retail"
    },
    {
        id: 2,
        title: "Building Scalable Data Pipelines with Cloud Technologies",
        date: "2024-11-28",
        readingTime: "10 min",
        categories: ["Cloud", "Data Engineering"],
        excerpt: "A practical guide to designing scalable, reliable data pipelines using modern cloud-based architectures.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        slug: "scalable-data-pipelines-cloud"
    },
    {
        id: 3,
        title: "Customer Segmentation: From RFM to Advanced Clustering",
        date: "2024-11-10",
        readingTime: "12 min",
        categories: ["Analytics", "Customer Insights"],
        excerpt: "Understanding how customer segmentation has evolved from traditional RFM analysis to advanced machine learning clustering techniques.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        slug: "customer-segmentation-advanced"
    }
];

// Certifications Data - Updated with new certificate images
const certificationsData = [
    {
        id: 1,
        title: "Hypothesis Testing in R",
        issuer: "DataCamp",
        image: "assets/certificates/hypothesis-testing-r.jpg",
        date: "December 2024",
        category: "Statistics",
        featured: true,
        link: "https://www.genspark.ai/api/files/s/ScxAiSOh"
    },
    {
        id: 2,
        title: "Learning Excel 2019",
        issuer: "LinkedIn Learning",
        image: "assets/certificates/learning-excel-2019.jpg",
        date: "September 2024",
        category: "Analytics",
        featured: true,
        link: "https://www.genspark.ai/api/files/s/qrqFpD1w"
    },
    {
        id: 3,
        title: "Learning R (2019)",
        issuer: "LinkedIn Learning",
        image: "assets/certificates/learning-r-2019.jpg",
        date: "September 2024",
        category: "Analytics",
        featured: true,
        link: "https://www.genspark.ai/api/files/s/j3Y2nlUK"
    },
    {
        id: 4,
        title: "Speak English Professionally",
        issuer: "Georgia Institute of Technology",
        image: "assets/certificates/speak-english-professionally.jpg",
        date: "September 2020",
        category: "Communication",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/WuOqPV2L"
    },
    {
        id: 5,
        title: "Write Professional Emails",
        issuer: "Georgia Institute of Technology",
        image: "assets/certificates/write-professional-emails.jpg",
        date: "September 2020",
        category: "Communication",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/3arWYwQE"
    },
    {
        id: 6,
        title: "Build Your Professional ePortfolio",
        issuer: "Georgia Institute of Technology",
        image: "assets/certificates/build-professional-eportfolio.jpg",
        date: "September 2020",
        category: "Communication",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/Ge0BZIbg"
    },
    {
        id: 7,
        title: "Understanding Financial Statements",
        issuer: "University of Illinois",
        image: "assets/certificates/understanding-financial-statements.jpg",
        date: "September 2020",
        category: "BI",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/fP6Z1y2X"
    },
    {
        id: 8,
        title: "Negotiation Skills",
        issuer: "Macquarie University",
        image: "assets/certificates/negotiation-skills.jpg",
        date: "September 2020",
        category: "Communication",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/BwBd3aH1"
    },
    {
        id: 9,
        title: "Technical Analysis Course",
        issuer: "Younity",
        image: "assets/certificates/technical-analysis-course.jpg",
        date: "February 2021",
        category: "Analytics",
        featured: false,
        link: "https://www.genspark.ai/api/files/s/PCdfrbJu"
    }
];

// News Ticker Items
const tickerItems = [
    { icon: "fa-star", text: "New: Predictive modeling for retail demand forecasting" },
    { icon: "fa-rocket", text: "Updated: Advanced Customer Segmentation Analysis" },
    { icon: "fa-chart-line", text: "Recent: Machine Learning projects added" },
    { icon: "fa-code", text: "Featured: Cloud-based data pipeline implementation" }
];

// GitHub Project Overrides (Optional)
// Use this to override auto-generated project data from GitHub
// Keys are repo names, values override title, description, tags, category, or image
const githubProjectOverrides = {
    // Example:
    // "repo-name": {
    //     title: "Custom Title",
    //     description: "Custom description",
    //     tags: ["Python", "SQL", "Custom"],
    //     category: "machine-learning",
    //     image: "path/to/custom-image.jpg"
    // }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioData,
        blogData,
        certificationsData,
        tickerItems,
        githubProjectOverrides
    };
}
