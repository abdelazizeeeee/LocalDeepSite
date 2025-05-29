// Default HTML content for BuildWithAbdou editor, styled with the blue/teal theme
export const defaultHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>BuildWithAbdou</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: "Inter", sans-serif;
        background: linear-gradient(135deg, #0c4a6e, #0f766e);
        background-size: 200% 200%;
        animation: gradient 15s ease infinite;
        color: white;
        padding: 2rem;
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      .container {
        max-width: 800px;
        text-align: center;
        padding: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
      }
      
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(to right, #ffffff, #5eead4);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      p {
        font-size: 1.25rem;
        line-height: 1.7;
        margin-bottom: 2rem;
        color: rgba(255, 255, 255, 0.9);
      }
      
      .arrow {
        position: absolute;
        bottom: -30px;
        right: -20px;
        width: 120px;
        transform: rotate(-15deg);
        animation: float 3s ease-in-out infinite;
        filter: drop-shadow(0 0 8px rgba(94, 234, 212, 0.6));
      }
      
      .btn {
        display: inline-block;
        background: linear-gradient(to right, #0ea5e9, #14b8a6);
        color: white;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        padding: 0.75rem 2rem;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      
      .glow {
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: rgba(94, 234, 212, 0.4);
        filter: blur(40px);
        z-index: -1;
      }
      
      .glow-1 {
        top: -50px;
        left: -50px;
        animation: pulse 4s infinite alternate;
      }
      
      .glow-2 {
        bottom: -50px;
        right: -50px;
        background: rgba(14, 165, 233, 0.4);
        animation: pulse 4s infinite alternate-reverse;
      }
      
      @media (max-width: 768px) {
        h1 {
          font-size: 2rem;
        }
        
        p {
          font-size: 1rem;
        }
        
        .container {
          padding: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      
      <h1>Welcome to BuildWithAbdou</h1>
      <p>Start creating beautiful web experiences with AI assistance. Ask anything about HTML, CSS, or JavaScript to get started!</p>
      
      <a href="#" class="btn">Get Started</a>
      
      <img src="https://enzostvs-buildwithabdou.hf.space/arrow.svg" class="arrow" alt="BuildWithAbdou Arrow" />
    </div>
    
    <script>
      // Ready for your JavaScript code
      document.querySelector('.btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Ready to build something amazing with BuildWithAbdou!');
      });
    </script>
  </body>
</html>
`;






