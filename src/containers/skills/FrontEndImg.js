import React, { Component } from "react";

export default class FrontEndImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="frontend-image"
        xmlns="http://www.w3.org/2000/svg"
        width="1098.75"
        height="632.37039"
        viewBox="0 0 1098.75 632.37039"
      >
        <title>Frontend Development</title>
        <rect
          x="0"
          y="0"
          width="1098.75"
          height="632.37039"
          fill={theme.background}
        />
        <circle cx="300" cy="300" r="200" fill={theme.primary} opacity="0.2" />
        <circle cx="300" cy="300" r="100" fill={theme.primary} />
        
        <rect
          x="100"
          y="100"
          width="100"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="120" y="130" fill={theme.background} fontSize="20" fontFamily="Arial">HTML</text>

        <rect
          x="100"
          y="200"
          width="100"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="120" y="230" fill={theme.background} fontSize="20" fontFamily="Arial">CSS</text>

        <rect
          x="100"
          y="300"
          width="100"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="120" y="330" fill={theme.background} fontSize="20" fontFamily="Arial">JavaScript</text>

        <rect
          x="100"
          y="400"
          width="100"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="120" y="430" fill={theme.background} fontSize="20" fontFamily="Arial">React</text>

        <path
          d="M600,250c50-50,150-50,200,0s50,150,0,200-150,50-200,0-50-150,0-200Z"
          fill={theme.secondary}
          opacity="0.2"
        />
        
        <path
          d="M600,250c50-50,150-50,200,0s50,150,0,200-150,50-200,0-50-150,0-200Z"
          fill={theme.secondary}
        />
        
        <text x="650" y="300" fill={theme.text} fontSize="20" fontFamily="Arial">Frontend Dev</text>
        
        <rect
          x="800"
          y="200"
          width="150"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="820" y="230" fill={theme.background} fontSize="20" fontFamily="Arial">Frameworks</text>
        
        <rect
          x="800"
          y="300"
          width="150"
          height="50"
          fill={theme.text}
          rx="10"
        />
        <text x="820" y="330" fill={theme.background} fontSize="20" fontFamily="Arial">UX/UI</text>
      </svg>
    );
  }
}
