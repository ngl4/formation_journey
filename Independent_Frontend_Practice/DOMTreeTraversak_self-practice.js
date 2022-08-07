/* 
DOM Traversal 

<HTML id="root">
  <body class="a">
    <div class="b">
      <p class="c">
      </p>
      <p class="g">
      </p>
    </div>
    <div class="b">
      <p class="d">
      </p>    
    </div>
  </body>
  <footer>
  </footer>
</HTML>

        a
      b   b
    c       d
  g



  let root = document.getElementById('root')
  deepTraversal(root,nodeList=[])

  Methods: 

  isTargetClass => boolean
  input - the string - class name 

  isValidPath => boolean
  input - the string - a class name path ie, "a>b>c" => true "a>b>g" => false
*/


