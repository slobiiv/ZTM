/* In DOM, we can use something called Selectors to select different elements so we can manipulate them: */


/* DOM SELECTORS:
  - getElementsByTagName
  - getElementByClassName
  - getElementById

  RECOMMENDED FOR USING FOR SELECTION!(It's more powerful then the first three):
  - querySelector - selects the first item that it finds
  - querySelectorAll

  - getAttribute - We need to select the item with attribute and then select the attribute itself:
      document.querySelector('li').getAttribute('random'); // 23
  - setAttribute - Select first the item and then set the Attribute:
     document.querySelector('li').setAttribute('random', '1000'); // <li random="1000">Notebook</li>
*/

/* CHANGING STYLES:
  - style.{property} // The issue is Separation of Concerns. We don't want to do styles. We will use className and classList
    document.querySelector('h1').style.background = 'yellow';

  - className // best
  - classList // best

  - classList.add
  - classList.remove
  - classList.toggle
  
  */