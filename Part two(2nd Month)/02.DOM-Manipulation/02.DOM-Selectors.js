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
  - style.{property} // (NOT RECOMMENDED) The issue is Separation of Concerns. * We don't want to do styles. We will use className and classList
    document.querySelector('h1').style.background = 'yellow';

        WE WANT TO HAVE THAT SEPARATION OF:
          - HTML - FOCUSES ON TEXT
          - CSS - FOCUSES ON STYLE
          - JAVASCRIPT - FOCUSES ON ACTIONS

    (RECOMMENDED METHODS)
  - className // best
        var h1 = document.querySelector('h1');
        h1.className = 'coolTitle'; * Then in Css we will make a 'coolTitle' class with an appropriate style
        'h1' has a class noc of 'coolTitle' <h1 class="coolTitle">

  - classList // best
        We use this one if an element has already class.
        document.querySelector('li').classList; (DOMTokenList [ "bold", "red" ])
        This classList gives us methods that we can use:
          - classList.add - document.querySelector('li').classList.add('done');
          - classList.remove - document.querySelector('li').classList.add('coolTitle');
          - classList.toggle - document.querySelector('li').classList.add('done'); (switch between false{off} and true{on})
  
  */