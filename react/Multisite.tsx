import React, { useEffect } from 'react'
import NavigationLink from './components/NavegationLink';

interface MultisiteProps {
  parameter: string,
  parameterName1: string,
  idValue1: number,
  parameterName2: string,
  idValue2: number,
  parameterName3: string,
  idValue3: number
}

const SetCssClass = (el: any, cssClass: string) => {
  el?.classList.add(cssClass);
}

const SetActiveClassOnReload = () =>{
  const activeBtn = localStorage.getItem("btnActiveElement") || "";
  const el = document.getElementById(activeBtn);
  const activeClass = localStorage.getItem("btnActiveClass") || "";
  SetCssClass(el, activeClass);
  localStorage.removeItem("btnActiveElement");
  localStorage.removeItem("btnActiveClass");
}
 
const Multisite: StorefrontFunctionComponent<MultisiteProps> = ({
    parameter, parameterName1, idValue1, parameterName2, idValue2, parameterName3, idValue3
  }) => {
  
  useEffect(() => {
    SetActiveClassOnReload();
  }, []);

  return (
    <div className="flex ph7 pv6">

      <NavigationLink 
        parameter={parameter} 
        parameterName={parameterName1} 
        idValue={idValue1}>
      </NavigationLink>

      <NavigationLink 
        parameter={parameter} 
        parameterName={parameterName2} 
        idValue={idValue2}>
      </NavigationLink>

      <NavigationLink 
        parameter={parameter} 
        parameterName={parameterName3} 
        idValue={idValue3}>
      </NavigationLink>

    </div>
  )
}

Multisite.schema = {
  title: 'editor.multisite.title',
  description: 'editor.multisite.description'
}

export default Multisite
