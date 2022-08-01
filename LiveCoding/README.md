# Live Coding

(starting Jun 20th 2022)

## Kevin Farst (06/18/22)

**Feedbacks & Takeaways**

```
Areas to improve:
Overall, your outline and structure of the interview was good! You laid out and discussed your approach, structured your HTML, and thoughtfully named your CSS selectors. However, time management was the biggest issue here as we ran out of time to showcase your entire skillset. Although not completing an interview solution is not automatically a “no” in every case, you want to present as much “evidence” as possible that you would be a good candidate for this role and you have good time management skills when approaching a problem.

What Went Well
Good discussion and outline of the problem solution
Structured your HTML and CSS well
Great communication in your thought process

What Could Use Improvement
Time management is the biggest one, everything was looking promising, we just ran out of time
Practice quickly making layouts, learning how to center things in different situations, etc. Practice the skills you will likely be doing in every design interview so they are second-nature to you

Resources
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://css-tricks.com/centering-css-complete-guide/
https://mattstauffer.com/blog/organizing-css-oocss-smacss-and-bem/#:\~:text=Since OOCSS is an abstract,throw Sass into the mix.
https://sass-lang.com/

```

## Stanley Liu (06/22/2022)

We did a basic CSS problem within the React environment (input JSON file -> generate a grid in the React DOM).

**Good Practice**

- Use a global variable (all capitalized) ie, `UNIT` that was used repetitive throughout the script

**Reflection**
There were some guidance from the interviewer to guide me through time when I was stuck.
I did well in identifying errors, but I was not able to resolved it well. I also think when I realized the use of `UNIT` should be applied in the positioning of the children gridbox.

**Feedbacks & Takeaways**
I need to improve on the following:

- Brush up on my JavaSCript - be stronger in `string interpolation`, know what context does it make sense to use certain methods, or how the curly bracket is used in the React framework.
- Communication - `order of operation` matters when communicating through the approach <- I got a similar advice on this when going through an Algo Sprint with Nam before. I noticed this issue that I think I need to work on to resolve. The specific example Stanley pointed out was when I was talking about `gridContainer` variable, I was not clear that at the beginning that it would be used to pass into the style of a div tag. I mentioned it later on which has already caused the interview to feel confused on what my intention was when I created the variable.
  - Use the communication during the interview to convey more

```
Areas to improve:

Fewer JS syntax mistakes
Remove unnecessary layers of abstraction (extra function)
Faster at solving bugs (position, top + right / left mixup, height + width, etc.)

Pros
Really kind and open communicator. Really receptive to feedback and learning
Able to come up with a working valid solution

Cons
Could improve articulation of some points (ex/ say I want to create an obj to pass to div style attr, before writing the style obj)
Could improve speed and efficiency of solving some bugs

Suggestions
Brush up on JS and JSX syntax
Study CSS position attributes and their uses
Learn to debug issues fasters

```

## Matt Oates (06/23/22)

**Feedbacks & Takeaways**

```
Areas to improve:
Needed to be unblocked a few times.

Feedback:
Some rustiness with object destructuring.
Over-engineering of a simple dropdown UI, and rusty with manipulating document flow.
Spent most of our time on the basic naive implementation and did not have time to talk about rich topics such as race conditions + debouncing.
```

## 06/26/22 Progress

- Reviewed over Checkbox task from Formation to prepare for the pair learning session
- https://css-tricks.com/almanac/selectors/a/after-and-before/

## Thomas (06/27/22) - HTML/CSS focus

Key Takeaways:

- Know how to use more CSS flexbox feature ie, `flex-grow` for instance to help to resize the button size.
- I did pretty well in this session and be able to voice out what I need to focus on and able to execute my approach in a timely manner.

## Stanley (06/29/22) - HTML/CSS focus

Key Takeaway:

- Being able to pick a specific area to focus on development. For instance, instead of building the tiny details of the HTML DOM or spent too long setting up the HTML skeleton without displaying anything on the DOM, maybe try focus on getting through displaying the links well using the CSS flexbox for instance. You have to make sure to showcase what you are good at during the live coding session. Focus on that instead.

## Jenny Xing (07/05/22) - Vanilla Js, HTML, CSS

- I did not do so well in the frontend session with Jenny today. I realized I made the mistake on coding too early which has caused me to not knowing what to do in the middle of the interview. It took me too long to get through a small section and I have been doing more `console.log` than expected.

- Key takeways: make sure when I voice out my ideas, I should keep trying it out instead of changing my mind during the process when I think of other possible approaches or problems. Put in more time doing the analysis is important!

Here are suggestions from Jenny:

```
try to thoroughly explore your ideas at the beginning, and have a clear sense of what you’re going to do before writing down code. it might help you specifically to write out a lot of pseudo code and function signatures to plan out the entire app, and then writing code afterwards.

try to familiarize yourself with the document API and vanilla javascript when it comes to manipulating the dom. getElementsByClassName, querySelectorAll, etc.

The index idea was definitely right- make sure to explore an option sufficiently before throwing it out the window.

try to use string interpolation when possible

try to improve the speed of execution/coding

try to think in more general terms/how to extend the code

try to think in terms of individual functions/what are the reuseable/repeating functions that happen

```

<!-- ## Erik Ritter()

**Feedbacks & Takeaways**

## Jenny Xing()

**Feedbacks & Takeaways**

## Jenny Xing()

**Feedbacks & Takeaways** -->

# Small Group Practice with Formation Fellows

## Polly, Ronald, Kathy

Takeaways:

- Going through the Savings Calculator and work through `Dates` - `new Date.getMonth()`, `split("-")[0]`- helps us to get the difference in month/year. I have learned a ton from this session.
- Going through questions on:
  - `what is event.preventDefault()?`
  - `what is the difference between plain variable vs state variable in React?`
  - `what is useState?`
  - `what is useEffect?`
  - `what is the isFetched variable used (Weather API - I am working on) means? why do we need to set it?`
- what is the difference between plain variable vs state variable in React? <- I really like this question asked by Polly!!

  ```
  General Differences:

    Plain Variable:
    (1) do not render to view
    (2) it will be rendered, re-created every time the react app renders --> building up/using up more memories, not efficient choice.

    State Variable:
    (1) render to view
    (2) it will only render and create once, unless the state variable is updated by user inputs or other functions. More efficient choice in React.

    Additional Readings can be found here:

    https://rotadev.com/react-hooks-using-usestate-vs-just-variables-dev/
  ```

<!--

## ()

**Feedbacks & Takeaways**

-->
