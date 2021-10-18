const variablesCSS=[
'--bodyBgColor'
,'--bodyFontColor'
,'--bodyTitleColor'
,'--bodySubTitle1Color'
,'--bodySubTitle2Color'
,'--bodySubTitle3Color'
,'--bodySubTitle4Color'
,'--bodySubTitle5Color'
]

generarSelectores()
buscarColores();

function generarSelectores(){
	variablesCSS.forEach(v=>{
		var selectoresCSS = document.createElement("div");
		selectoresCSS.className="selectorColores";
		var id=v.replace(/--/i, '');
		selectoresCSS.innerHTML=`<input type="checkbox" checked id="${id}Checkbox" name="${id}Checkbox" value="${id}" onclick="seleccionarColor();">Activar - Selector ${id}: </checkbox><input type="color" id="${id}ColorPicker" defaultValue='' oninput="seleccionarColor();"></div>`;
		document.querySelector(".coloresContainer").appendChild(selectoresCSS);
	});
	document.querySelector(".coloresContainer").innerHTML+='<legend>Copiate estos valores aparte para aplicarlos</legend><p id="coloresSeleccionados"></p>'
}

function seleccionarColor(){
	var colores=[];
	var htmlData="";
	let root = document.documentElement;

	document.querySelectorAll("input[type='checkbox']").forEach(e=>{
		var id=e.value;
		//console.log(style.getPropertyValue('--'+id)) // #336699
		var color=document.getElementById(id+'ColorPicker')

		var variableColor='&nbsp;&nbsp;&nbsp;&nbsp;--'+id+': '+color.value+';';

		if(e.checked){
			variableColor+='<br>'
			root.style.setProperty('--'+id,color.value);
		}else{
			variableColor="";
			root.style.setProperty('--'+id,color.defaultValue);
		}
		
		htmlData+=variableColor;
		
	});
	coloresSeleccionados.innerHTML=":root{<br>"+htmlData+"}";
}


function buscarColores(){

	var style = document.querySelectorAll("input[type='checkbox']").forEach(e=>{
		var id=e.value;	//bodyBgColor bodyBgColorColorPicker
		var color=document.getElementById(id+'ColorPicker');
		var defaultValue=getComputedStyle(document.body).getPropertyValue('--'+id).trim();
		color.defaultValue=defaultValue;
	});
	seleccionarColor();
}

/*
Array.from(document.styleSheets)
   .filter(
      sheet =>
      sheet.href === null || sheet.href.startsWith(window.location.origin)
   )
   .reduce(
      (acc, sheet) =>
      (acc = [
         ...acc,
         ...Array.from(sheet.cssRules).reduce(
            (def, rule) =>
            (def =
               rule.selectorText === ":root" ?
               [
                  ...def,
                  ...Array.from(rule.style).filter(name =>
                     name.startsWith("--")
                  )
               ] :
               def),
            []
         )
      ]),
      []
   );
*/

/*
 Check if the stylesheet is internal or hosted on the current domain.
 If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
 See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes
 
 NOTE: One problem this could raise is hosting stylesheets on a CDN with a
 different domain. Those would be cross origin, so you can't access them.
*/

/*
const isSameDomain = (styleSheet) => {
  // Internal style blocks won't have an href value
  if (!styleSheet.href) {
    return true;
  }
  return styleSheet.href.indexOf(window.location.origin) === 0;
};
*/

/*
 Determine if the given rule is a CSSStyleRule
 See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
*/

/*
const isStyleRule = (rule) => rule.type === 1;
*/

/**
 * Get all custom properties on a page
 * @return array<array[string, string]>
 * ex; [["--color-accent", "#b9f500"], ["--color-text", "#252525"], ...]
 */

/*
const getCSSCustomPropIndex = () =>
  // styleSheets is array-like, so we convert it to an array.
  // Filter out any stylesheets not on this domain
  [...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
      finalArr.concat(
        // cssRules is array-like, so we convert it to an array
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
          const props = [...rule.style]
            .map((propName) => [
              propName.trim(),
              rule.style.getPropertyValue(propName).trim()
            ])
            // Discard any props that don't start with "--". Custom props are required to.
            .filter(([propName]) => propName.indexOf("--") === 0);

          return [...propValArr, ...props];
        }, [])
      ),
    []
  );
const cssCustomPropIndex = getCSSCustomPropIndex();
// Add the swatches to the DOM
document.querySelector(".colors").innerHTML = cssCustomPropIndex.reduce(
  (str, [prop, val]) => `${str}<li class="color">
    <b class="color__swatch" style="--color: ${val}"></b>
    <div class="color__details">
      <input value="${prop}" readonly />
      <input value="${val}" readonly />
    </div>
   </li>`,
  ""
);
*/