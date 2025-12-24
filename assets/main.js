// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check system preference on load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Toggle function
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
            initCharts('dark');
        } else {
            localStorage.theme = 'light';
            initCharts('light');
        }
    });
}

// ECharts Initialization
let chartInstance = null;

function initCharts(theme) {
    const chartDom = document.getElementById('skillsChart');
    if (!chartDom || typeof echarts === 'undefined') return;

    if (chartInstance) {
        chartInstance.dispose();
    }

    const textColor = theme === 'dark' ? '#E5E7EB' : '#374151';
    const splitLineColor = theme === 'dark' ? '#374151' : '#E5E7EB';
    const areaColor = theme === 'dark' ? 'rgba(148, 28, 97, 0.5)' : 'rgba(154, 0, 54, 0.2)';
    const lineColor = theme === 'dark' ? '#EEBAC0' : '#9A0036';

    chartInstance = echarts.init(chartDom, theme === 'dark' ? 'dark' : null);

    const option = {
        backgroundColor: 'transparent',
        radar: {
            indicator: [
                { name: '金融專業', max: 100 },
                { name: '資訊安全', max: 100 },
                { name: '數據分析', max: 100 },
                { name: 'AI 應用', max: 100 },
                { name: '系統開發', max: 100 },
                { name: '法規遵循', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: textColor,
                fontSize: 14,
                fontFamily: '"Noto Sans TC", sans-serif',
                fontWeight: 'bold'
            },
            splitLine: {
                lineStyle: {
                    color: [splitLineColor]
                }
            },
            splitArea: { show: false },
            axisLine: {
                lineStyle: { color: splitLineColor }
            }
        },
        series: [
            {
                name: 'Skill Composition',
                type: 'radar',
                data: [
                    {
                        value: [95, 85, 90, 88, 80, 90],
                        name: 'Dunk 的能力分佈',
                        areaStyle: { color: areaColor },
                        lineStyle: { color: lineColor, width: 2 },
                        itemStyle: { color: lineColor }
                    }
                ],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }
        ]
    };

    chartInstance.setOption(option);
}

// Initialize charts on load
window.addEventListener('load', () => {
    initCharts(htmlElement.classList.contains('dark') ? 'dark' : 'light');
});

// Resize charts on window resize
window.addEventListener('resize', () => {
    if (chartInstance) {
        chartInstance.resize();
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Active Navigation Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to corresponding link
            const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => observer.observe(section));
