export const colors = {
  bg: "#ffffff",
  text: "#000",
  accent: "#2f5a2f",
}

export const mq = {
  desktop: `min-width: 768px`,
  mobileOnly: `max-width: 767px`,
  largeDesktop: `min-width: 1024px`,
}

export const primaryButton = `
cursor: pointer;
font-family: 'Source Code Pro', monospace;
text-transform: uppercase;
font-weight: 400;
font-size: 24px;
letter-spacing: 0.2px;
padding: 10px;
text-align: center;
text-decoration: none;
color: white;
background: black;
color: white;
transition: all 300ms ease-in-out;
&:hover,
&:focus {
  background: ${colors.accent}
}
`

export const actionButton = `
cursor: pointer;
font-family: 'Source Code Pro', monospace;
text-transform: uppercase;
font-weight: 400;
font-size: 24px;
letter-spacing: 0.2px;
padding: 10px;
text-align: center;
text-decoration: none;
color: white;
background: ${colors.accent};
color: white;
transition: all 300ms ease-in-out;
&:hover,
&:focus {
  background: black;
}
`

export const textLinkButton = `
font-family: 'Source Code Pro', monospace;
font-weight: 300;
letter-spacing: 0.2px;
font-size: 14px;
color: black;
transition: all 300ms ease-in-out;
&:hover,
&:focus {
  color: ${colors.accent};
  text-decoration: underline;
}
`
