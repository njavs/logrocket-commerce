import { ReactSVG }

const Logo = ({ className = '', ...props }) => (

  <ReactSVG
  src="svg.svg"
  afterInjection={(error, svg) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(svg)
  }}
  beforeInjection={(svg) => {
    svg.classList.add('svg-class-name')
    svg.setAttribute('style', 'width: 200px')
  }}
  evalScripts="always"
  fallback={() => <span>Error!</span>}
  loading={() => <span>Loading</span>}
  renumerateIRIElements={false}
  useRequestCache={false}
  wrapper="span"
  className="wrapper-class-name"
  onClick={() => {
    console.log('wrapper onClick')
  }}
/>

  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={className}
  //   {...props}
  // >
  //   <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
  //   <path
  //     fillRule="evenodd"
  //     clipRule="evenodd"
  //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //     fill="var(--primary)"
  //   />
  // </svg>
)

export default Logo
