import React from 'react'
import styles from '../styles/styles.css'

interface NavigationLinkProps {
    parameter: string,
    src: string,
    alt: string,
    title: string,
    idValue: number,
}

const SetFacets = async(parameter: string, parameterValue: number, btn: string, activeClass: any) => {
  const data = {
    public: {
      facets: {
        value: `${parameter}=${parameterValue};`
      }
    }
  };

  fetch('/api/sessions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then((response: any) => {
    response.json();
    SetLocalStorageBtnActiveClass(btn, activeClass);
    location.reload();
  });
}

const SetCssClassById = (id: string, cssClass: string) => {
  const el = document.getElementById(id);
  el?.classList.add(cssClass);
}

const SetLocalStorageBtnActiveClass = (btn: string, activeClass: string) =>{
  localStorage.setItem("btnActiveElement", btn);
  localStorage.setItem("btnActiveClass", activeClass);
}
 
const NavigationLink: StorefrontFunctionComponent<NavigationLinkProps> = ({parameter, src, alt, title, idValue}) => {

  return (
    <>
      <button id={`btn-${title}`} className={styles.brandLink} onClick={() => {
          SetCssClassById(`btn-${title}`, styles.active);
          SetFacets(parameter, idValue, `btn-${title}`, styles.active);
        }}>
          <img src={src} alt={alt} />  
      </button>
    </>
  )
}

export default NavigationLink