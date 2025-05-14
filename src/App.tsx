<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/scrollreveal"></script>
    <style>
        * {
            font-family: 'Inter', sans-serif;
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
        }
        
        .card {
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }

        .nav-link {
            position: relative;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #FF6B6B;
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .scroll-reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-gray-800">Portfolio</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="nav-link text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#work" class="nav-link text-gray-600 hover:text-gray-900">Work</a>
                    <a href="#about" class="nav-link text-gray-600 hover:text-gray-900">About</a>
                    <a href="#contact" class="nav-link text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                <button class="md:hidden text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 scroll-reveal">
                    Creating Digital Experiences That Matter
                </h1>
                <p class="text-xl text-gray-600 mb-8 scroll-reveal">
                    I'm a passionate developer crafting beautiful and functional websites
                </p>
                <div class="flex justify-center gap-4 scroll-reveal">
                    <a href="#work" class="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                        View My Work
                    </a>
                    <a href="#contact" class="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center scroll-reveal">Featured Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Cards -->
                <div class="card bg-white rounded-xl shadow-lg overflow-hidden scroll-reveal">
                    <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" alt="Project 1" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">E-commerce Platform</h3>
                        <p class="text-gray-600">Modern shopping experience with React and Node.js</p>
                    </div>
                </div>
                <div class="card bg-white rounded-xl shadow-lg overflow-hidden scroll-reveal">
                    <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg" alt="Project 2" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Social Media App</h3>
                        <p class="text-gray-600">Full-stack application with real-time features</p>
                    </div>
                </div>
                <div class="card bg-white rounded-xl shadow-lg overflow-hidden scroll-reveal">
                    <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg" alt="Project 3" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                        <p class="text-gray-600">Data visualization with D3.js and Vue</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center scroll-reveal">About Me</h2>
                <div class="bg-white rounded-xl shadow-lg p-8 scroll-reveal">
                    <p class="text-gray-600 leading-relaxed mb-6">
                        I'm a full-stack developer with over 5 years of experience in creating modern web applications. 
                        My passion lies in building user-friendly interfaces and scalable backend solutions.
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900">Frontend</h4>
                            <p class="text-gray-600">React, Vue</p>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900">Backend</h4>
                            <p class="text-gray-600">Node.js, Python</p>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900">Database</h4>
                            <p class="text-gray-600">MongoDB, SQL</p>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900">DevOps</h4>
                            <p class="text-gray-600">AWS, Docker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 scroll-reveal">Get in Touch</h2>
                <div class="bg-gray-50 rounded-xl p-8 scroll-reveal">
                    <form class="max-w-md mx-auto">
                        <div class="mb-6">
                            <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900">
                        </div>
                        <div class="mb-6">
                            <input type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900">
                        </div>
                        <div class="mb-6">
                            <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6 text-center">
            <p class="mb-4">&copy; 2025 Portfolio. All rights reserved.</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="hover:text-gray-400 transition duration-300">Twitter</a>
                <a href="#" class="hover:text-gray-400 transition duration-300">GitHub</a>
                <a href="#" class="hover:text-gray-400 transition duration-300">LinkedIn</a>
            </div>
        </div>
    </footer>

    <script>
        // Initialize ScrollReveal
        ScrollReveal().reveal('.scroll-reveal', {
            delay: 200,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 100
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>