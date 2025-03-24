import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}>
          <a href="#map">
            <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#7eec8b" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789Z" fill="#000000"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z" fill="#000000"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11.3856 23.789L12 23C12.6139 23.7894 12.615 23.7885 12.615 23.7885L12.6169 23.7871L12.6231 23.7822L12.645 23.765C12.6638 23.7501 12.6909 23.7287 12.7258 23.7008C12.7954 23.6451 12.8961 23.5637 13.0233 23.4587C13.2776 23.2488 13.6385 22.944 14.0706 22.5599C14.9334 21.793 16.0867 20.7041 17.2433 19.419C18.397 18.1371 19.5731 16.639 20.4653 15.0528C21.3524 13.4758 22 11.7393 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 11.7393 2.64762 13.4758 3.53467 15.0528C4.42693 16.639 5.60303 18.1371 6.75671 19.419C7.91329 20.7041 9.06662 21.793 9.92939 22.5599C10.3615 22.944 10.7224 23.2488 10.9767 23.4587C11.1039 23.5637 11.2046 23.6451 11.2742 23.7008C11.3091 23.7287 11.3362 23.7501 11.355 23.765L11.3769 23.7822L11.3831 23.7871L11.3856 23.789ZM6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 11.2607 19.5226 12.6492 18.7222 14.0722C17.9269 15.486 16.853 16.8629 15.7567 18.081C14.6633 19.2959 13.5666 20.332 12.7419 21.0651C12.4576 21.3178 12.2065 21.5337 12 21.7078C11.7935 21.5337 11.5424 21.3178 11.2581 21.0651C10.4334 20.332 9.33671 19.2959 8.24329 18.081C7.14697 16.8629 6.07307 15.486 5.27783 14.0722C4.47738 12.6492 4 11.2607 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315Z" fill="#000000"></path> </g></svg>
          </a>
        </li>
        <li style={liStyles}>
          <a href="#alert">
            <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ec7e7e" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9.22843V14.7716C3 15.302 3.21071 15.8107 3.58579 16.1858L7.81421 20.4142C8.18929 20.7893 8.69799 21 9.22843 21H14.7716C15.302 21 15.8107 20.7893 16.1858 20.4142L20.4142 16.1858C20.7893 15.8107 21 15.302 21 14.7716V9.22843C21 8.69799 20.7893 8.18929 20.4142 7.81421L16.1858 3.58579C15.8107 3.21071 15.302 3 14.7716 3H9.22843C8.69799 3 8.18929 3.21071 7.81421 3.58579L3.58579 7.81421C3.21071 8.18929 3 8.69799 3 9.22843Z" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 8V13" stroke="#323232" strokeWidth="2" strokeLinecap="round"></path> <path d="M12 16V15.9888" stroke="#323232" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
          </a>
        </li>
        <li style={liStyles}>
          <a href="#community">
            <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#7ed0ec" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </a>
        </li>
      </ul >
    </nav >
  )
}


const navStyles: React.CSSProperties = {
  backgroundColor: '#f2e6ff',
  padding: '10px',
}

const ulStyles: React.CSSProperties = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around',
}

const liStyles: React.CSSProperties = {
  display: 'inline',
  color: 'white',
  padding: '5px',
  width: '40px',
  height: '40px',
}

export default Navbar
