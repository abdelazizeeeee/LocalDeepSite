// Default HTML content for BuildWithAbdou editor, styled with the blue/teal theme
export const defaultHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>BuildWithAbdou</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8">
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100dvh;
        font-family: "Arial", sans-serif;
        text-align: center;
        background-color: #1e3a8a; /* blue-900 */
      }
      .arrow {
        position: absolute;
        bottom: 32px;
        left: 0px;
        width: 100px;
        transform: rotate(30deg);
      }
      h1 {
        font-size: 50px;
        color: #ffffff; /* white */
      }
      h1 span {
        color: #2dd4bf; /* teal-300 */
        font-size: 32px;
      }
    </style>
  </head>
  <body>
    <h1>
      <span>I'm ready to work,</span><br />
      Ask BuildWithAbdou anything.
    </h1>
    <img src="https://enzostvs-buildwithabdou.hf.space/arrow.svg" class="arrow" alt="BuildWithAbdou Arrow" />
    <script></script>
  </body>
</html>
`;






