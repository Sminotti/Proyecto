const vistaLabelFlotante = (parametro,parametro2) => {
    document.getElementById(parametro).style.opacity = parametro2;
   
  };

  const start = () => {

    document.getElementById("home").addEventListener("mouseover",() => {vistaLabelFlotante("LabelHome","100")});
    document.getElementById("home").addEventListener("mouseout", () => {vistaLabelFlotante("LabelHome","0")});
    document.getElementById("news").addEventListener("mouseover",() => {vistaLabelFlotante("LabelNews","100")});
    document.getElementById("news").addEventListener("mouseout", () => {vistaLabelFlotante("LabelNews","0")});
    document.getElementById("@").addEventListener("mouseover",() => {vistaLabelFlotante("Label@","100")});
    document.getElementById("@").addEventListener("mouseout",() => {vistaLabelFlotante("Label@","0")});
  };

  window.onload = start;