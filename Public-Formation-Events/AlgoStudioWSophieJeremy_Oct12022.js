/*
'''
Solution:

Noor:
function mapOfDestinations (flights, homeCity, destinations, map) {
  // loop through destinations and set up a map initiated with 0 flights
  if (!flights[homeCity].length) {
    return;
  } else {
    let destination = flights[homeCity];
    map[destination] = map[destination] + 1;
    return mapOfDestinations(flights, homeCity, destinations, map)
  }
}

Anthony's:
- Create a set of visited cities
- Create a map of destination count. Map<string, int>
Recursive approach
- Starting from home city in flight table, update city in visited cities,
  then recursively iterate through reachable cities,
  incrementing until destination is reached,
  then we update destination flight count with minimum of current count and map count - Math.min
- Return destination flight count 

BFS vs. DFS
* Does it matter here?
  - BFS: the node you're currently at was reached in the shortest path (least num of edges)

Mohammad
- BFS from home to destination 

Jeremy
- Ingredients for BFS: 
    -visited set and 
    -a queue (FIFO) of cities that need to be processed
        - (city name, distance)
    - output: mapping of city to distance

- while we have stuff in the queue:
    - city name, distance = queue.pop()
    - update our distance mapping
    - get the neighbors
        - if not visited: add visited and enqueue


'''
from typing import Dict, List
from collections import deque

def possible_vacations(
    flights: Dict[str, List[str]],
    start: str,
    destinations: List[str],
):
    '''
    - Ingredients for BFS: 
        -visited set and 
        -a queue (FIFO) of cities that need to be processed
            - (city name, distance)
        - output: mapping of city to distance
    - while we have stuff in the queue:
        - city name, distance = queue.pop()
        - update our distance mapping
        - get the neighbors
            - if not visited: add visited and enqueue
    '''
    destinations = set(destinations)
    visited = set()
    queue = deque()
    output: Dict[str, int] = {}

    queue.append((start, 0))
    visited.add(start)
    while queue:
      city, distance = queue.popleft()

      if city in destinations and destinations not in output:
        output[city] = distance

      for cityToVisit in flights[city]:
        if cityToVisit not in visited:
            queue.append((cityToVisit, distance + 1))
            visited.add(cityToVisit)
    return output

print(possible_vacations({'Phoenix': ['Seattle'], 'Seattle':[]}, 'Phoenix', ['Seattle'])) # returns {'Seattle': 1}
print(possible_vacations({'Phoenix': [], 'Seattle':[]}, 'Phoenix', ['Seattle'])) # returns {}
print(possible_vacations({'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']}, 'Phoenix', ['Seattle', 'Boston'])) # returns {'Seattle': 1, 'Boston': 2}

*/
    


/*
Solution:

Noor:
function mapOfDestinations (flights, homeCity, destinations, map) {
  // loop through destinations and set up a map initiated with 0 flights
  if (!flights[homeCity].length) {
    return;
  } else {
    let destination = flights[homeCity];
    map[destination] = map[destination] + 1;
    return mapOfDestinations(flights, homeCity, destinations, map)
  }
}

Anthony's:
- Create a set of visited cities
- Create a map of destination count. Map<string, int>
Recursive approach
- Starting from home city in flight table, update city in visited cities,
  then recursively iterate through reachable cities,
  incrementing until destination is reached,
  then we update destination flight count with minimum of current count and map count - Math.min
- Return destination flight count 

BFS vs. DFS
* Does it matter here?
  - BFS: the node you're currently at was reached in the shortest path (least num of edges)

Mohammad
- BFS from home to destination 
*/

/*

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.
The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

Flight Table:
{
  'Phoenix': [], // dead-end
  'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}
Home City: Seattle
List(array) of destinations: ['Boston']
{
  'Boston': 1
}

{
  'Phoenix': ['Boston'], 
  'Seattle': ['Phoenix'], // can fly to 'Phoenix'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}
Home City: Seattle
List(array) of destinations: ['Boston']
{
  'Boston': 2
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the number of flights needed for each destination. If a destination is not reachable, do not include it in the output.

Can destination = home city? No.
Leave an unreachable destination out of the output.

Example:
*/

console.log(possibleVacations({'Phoenix': ['Seattle'], 'Seattle':[]}, 'Phoenix', ['Seattle'])); // returns {'Seattle': 1}
console.log(possibleVacations({'Phoenix': [], 'Seattle':[]}, 'Phoenix', ['Seattle'])); // returns {}
console.log(possibleVacations({'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']}, 'Phoenix', ['Seattle', 'Boston'])); // returns {'Seattle': 1, 'Boston': 2}
















/*

Chats in the Meeting:

Anthony Benites6:38 PM
- Create a set of visited cities
- Create a map of destination count. 
- Starting from home city in flight table, update city in visited cities,
  then recursively iterate through reachable cities,
  incrementing by one, until destination is reached,
  then we update destination flight count with minimum of current count and map count
- Return destination flight count
Mohammad Mahdieh6:39 PM
BFS from home to destination
Pierre Lourens6:40 PM
^ for each destination, though
Yernat Yestekov6:40 PM
We came up with the same solution
Brent Muha6:40 PM
Our group also decided on BFS because we're looking for the minimum number of layovers for each destination, so it's better not to go too deep

William Meng6:48 PM
- start at home city
- keep track of visited set, numDestinations found, destinations map (result)
- use BFS to explore unvisited stops from home city, keeping track of number of stops from home city at each location
  - if city is a destination (in result map), add it's distance to result and increment numDestinations
  - add unvisited children to queue (mark stop as visited now)
- stop when numDestinations equals total destinations OR queue is empty
  - if numDestinations is less than total de
David Archuleta Jr.6:48 PM
you could also use bi-directional bfs
Sophie Novati6:49 PM
hahaha it's a great trick - being like "hmmm i wonder if X would be relevant" to test a direction

*/