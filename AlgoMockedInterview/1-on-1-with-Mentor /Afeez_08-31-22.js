/*
Example Question: Write a function that takes form id as input, and returns the DOM form values as an object (map/hash).


input: <form id="">
            <label name="age">30</label>
            <div>
              <label name="name">bill</label>
            </div>
       </form>


tagStack: 
valuesStack: 

output: 
Map
{
  age:30,
  name: bill
}

- Get the children attribute name and its value 
- focus on the name attr and values associate with the tag 
- Can be Nested for each child element node 
- Only store the used element and its values (based on the name attr)
- All names should be unique 
- All name attr should also have values 
- Should I assume the input be in the valid format 
- Is the input already a tree or is it a string? 
- does the order of the elements matters? (ordering should not be matter since the output is a map)

Approaches: 

#1) DFS 
- "name" -> value 
- Going through every single element node 

String: 
- parseHTMLfunction (keep track of the opening and closing tags and separate tag to keep track of the values) => obj {} nodes 
=> recursion 

helper func - parse DOM -> create func (DOMElemTree) 
- node (label, children: {label, div}, value: null)


Form -> get key -> grab all keys 


stack1: (,(,
stack2: 10






*/

