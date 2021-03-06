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
display: inline-block;
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
&:disabled:hover {
  background: black;
  cursor: not-allowed;
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
cursor: pointer;
display: inline-block;
font-family: 'Source Code Pro', monospace;
text-decoration: none;
font-weight: 300;
letter-spacing: 0.2px;
display: inline-block;
border-bottom: 1px solid black;
font-size: 14px;
line-height: 24px;
color: black;
transition: all 300ms ease-in-out;
&:hover,
&:focus {
  color: ${colors.accent};
  border-color ${colors.accent};
}
`
